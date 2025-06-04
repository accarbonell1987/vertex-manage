import CopyToClipboard from '@/components/CopyToClipboard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StreamerWithReferals } from '@/types/streamers.types';

const StreamerDetailContent = ({ streamer }: { streamer: StreamerWithReferals | null }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <b>Nombre:</b> {streamer?.name}
      </div>
      <div className="flex items-center gap-2">
        <b>Waha ID:</b> <CopyToClipboard text={streamer?.wahaID ?? ''} />
      </div>
      <div className="flex items-center gap-2">
        <b>Waha Nick:</b> {streamer?.wahaName}
      </div>
      <div className="flex items-center gap-2">
        <b>Desde:</b> {streamer?.createdAt ? new Date(streamer.createdAt).toLocaleDateString() : ''}
      </div>
      <div className="flex items-center gap-2">
        <b>Telefono:</b> <CopyToClipboard text={streamer?.phoneNumber ?? ''} />
      </div>
      <div className="flex items-center gap-2">
        <b>Cuenta Bancaria:</b> <CopyToClipboard text={streamer?.bankAccount ?? ''} />
      </div>
      <div className="flex items-center gap-2">
        <b>Cotiza en Nómina:</b>{' '}
        <Badge className={streamer?.allowInRoster ? 'bg-green-600' : 'bg-red-600'}>{streamer?.allowInRoster ? 'SÍ' : 'NO'}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <b>Recibe Penalizaciones:</b>{' '}
        <Badge className={streamer?.applyPenalties ? 'bg-green-600' : 'bg-red-600'}>{streamer?.applyPenalties ? 'SÍ' : 'NO'}</Badge>
      </div>
    </div>
  );
};

const StreamerDetails = ({ streamer }: { streamer: StreamerWithReferals | null }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalles</CardTitle>
        <CardDescription>Información general del streamer</CardDescription>
      </CardHeader>
      <CardContent>
        {streamer ? (
          <StreamerDetailContent streamer={streamer} />
        ) : (
          <p className="text-center">Seleccione un streamer para ver sus detalles</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StreamerDetails;
