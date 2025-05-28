import DialogComponent from '@/components/Dialog';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import useStoreConfiguration from '@/context/useStoreConfiguration';
import { WeekWithData } from '@/types/weeks.types';
import { Trophy } from 'lucide-react';
import { useState } from 'react';

interface Props {
  week: WeekWithData;
}

const PrizeWeekDialog = ({ week }: Readonly<Props>) => {
  const { prize, changePrize } = useStoreConfiguration();
  const [currentPrize, setCurrentPrize] = useState(prize);

  const handleSetPrize = () => {
    changePrize(Number(currentPrize));
  };

  return (
    <DialogComponent
      title="Premio de la Semana"
      description="Establezca el premio de la semana"
      trigger={
        <Button className="cursor-pointer">
          <Trophy />
        </Button>
      }
      actionButton={
        <DialogClose asChild>
          <Button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600" disabled={currentPrize < 0} onClick={handleSetPrize}>
            <Trophy /> Establecer
          </Button>
        </DialogClose>
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>
            Para establecer el premio, ingresa el premio de la semana <b className="text-red-600">{week.name}</b>
          </span>
          <Input id="prize" placeholder={week.name} value={currentPrize} onChange={(e) => setCurrentPrize(Number(e.target.value))} />
        </div>
      </div>
    </DialogComponent>
  );
};

export default PrizeWeekDialog;
