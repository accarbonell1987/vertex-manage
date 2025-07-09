'use client';

import { exportDataForAdminToExcel, exportDataForAgencyToExcel, parseStreamingExcel } from '@/app/lib/excel';
import StreamerModal from '@/app/streamers/components/StreamerModal';
import ImportExcelModal from '@/components/ImportExcelModal';
import ToolTip from '@/components/ToolTip';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useStoreConfiguration from '@/context/useStoreConfiguration';
import { bulkImportStreamingEntries } from '@/services/streamingData';
import { FileType } from '@/types/common.types';
import { StreamerWithReferals } from '@/types/streamers.types';
import { WeekWithData } from '@/types/weeks.types';
import { ShieldUser, Upload, UserRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import ExpensesWeekDialog from '../../components/ExpensesWeekDialog';
import PrizeWeekDialog from '../../components/PrizeWeekDialog';
import useStreamingData from '../../hooks/useStreamingData';
import { getDynamicData } from '../../utils/functions';
import StreamingDataFinder from './StreamingDataFinder';
import StreamingDataTable from './StreamingDataTable';
import StreamingWeekActions from './StreamingWeekActions';
import StreamingWeekDetails from './StreamingWeekDetails';
import StreamingWeekRoster from './StreamingWeekRoster';

interface StreamingDataLayoutProps {
  week: WeekWithData;
}

const StreamingDataLayout = ({ week }: StreamingDataLayoutProps) => {
  const { configuration } = useStoreConfiguration();
  const { weekData, handleOnRefresh, actionLoading, setActionLoading, handleFindByCriteria } = useStreamingData({ init: week });
  const [open, setOpen] = useState(false);
  const [streamerConfigurationOpen, setStreamerConfigurationOpen] = useState(false);
  const [selectedStreamer, setSelectedStreamer] = useState<StreamerWithReferals | null>(null);

  const dataWithDynamic = useMemo(() => getDynamicData(weekData.data, configuration), [weekData.data, configuration]);
  const weekWithDynamic = {
    ...weekData,
    data: dataWithDynamic,
  };

  const handleOnClose = async () => {
    setOpen(false);
    setStreamerConfigurationOpen(false);
    handleOnRefresh();
  };
  const onSubmit = async (e: React.FormEvent, files: FileType[]) => {
    e.preventDefault();

    if (!files?.length) return;
    const file = files[0].file;
    if (!file) return;

    const parsedFileAsExcel = await parseStreamingExcel(file);
    if (!parsedFileAsExcel) return;

    try {
      setActionLoading(true);
      await bulkImportStreamingEntries(week.id, parsedFileAsExcel);
    } catch (error) {
      console.error(error);
    } finally {
      setActionLoading(false);
      handleOnClose();
    }
  };
  const handleOnExportToAdmin = () => {
    exportDataForAdminToExcel(dataWithDynamic);
  };
  const handleOnExportToAgency = () => {
    exportDataForAgencyToExcel(dataWithDynamic);
  };

  return (
    <>
      <ImportExcelModal open={open} setOpen={setOpen} actionLoading={actionLoading} onSubmit={onSubmit} />
      <StreamerModal
        open={streamerConfigurationOpen}
        onClose={handleOnClose}
        setOpen={setStreamerConfigurationOpen}
        streamer={selectedStreamer}
      />
      <div className="flex flex-col gap-4 sm:flex-row">
        <Card className="w-full sm:w-3/4">
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Datos de la semana</h2>
              <div className="flex flex-row gap-2 ml-auto">
                <PrizeWeekDialog week={week} />
                <ExpensesWeekDialog week={week} />
                <ToolTip content="Exportar Datos a Excel para Administración">
                  <Button className="cursor-pointer" onClick={handleOnExportToAdmin}>
                    <ShieldUser />
                  </Button>
                </ToolTip>
                <ToolTip content="Exportar Datos a Excel para Streamers">
                  <Button className="cursor-pointer" onClick={handleOnExportToAgency}>
                    <UserRound />
                  </Button>
                </ToolTip>
                <ToolTip content="Importar Datos desde Excel">
                  <Button
                    className="cursor-pointer"
                    variant={'destructive'}
                    disabled={week.closed || actionLoading}
                    onClick={() => setOpen(true)}
                  >
                    <Upload />
                  </Button>
                </ToolTip>
              </div>

              {/* <ToolTip content="Exportar como Excel">
                <Button className="cursor-pointer" onClick={() => {}}>
                  <Download />
                </Button>
              </ToolTip> */}
            </div>
            <div className="flex flex-col gap-4">
              <StreamingDataFinder onFind={handleFindByCriteria} />
              <StreamingDataTable
                week={weekWithDynamic}
                onEdit={(streamer) => {
                  setSelectedStreamer(streamer);
                  setStreamerConfigurationOpen(true);
                }}
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4 sm:w-1/4">
          <StreamingWeekDetails week={weekWithDynamic} />
          <StreamingWeekRoster week={weekWithDynamic} />
          <StreamingWeekActions week={weekWithDynamic} onRefresh={handleOnRefresh} actionLoading={actionLoading} />
        </div>
      </div>
    </>
  );
};

export default StreamingDataLayout;
