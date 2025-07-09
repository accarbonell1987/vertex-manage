import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

import { createStreamer, updateStreamer } from '@/services/streamers';
import { StreamerWithReferals } from '@/types/streamers.types';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  setOpen: (open: boolean) => void;
  streamer?: StreamerWithReferals | null;
}

interface Props {
  open: boolean;
  onClose: () => void;
  setOpen: (open: boolean) => void;
  streamer?: StreamerWithReferals | null;
}

const StreamerModal = ({ open, onClose, setOpen, streamer }: Props) => {
  const [name, setName] = useState('');
  const [wahaID, setWahaID] = useState('');
  const [wahaName, setWahaName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bankAccountCUP, setBankAccountCUP] = useState('');
  const [allowInRoster, setAllowInRoster] = useState(true);
  const [applyPenalties, setApplyPenalties] = useState(true);
  const [penalized, setPenalized] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('mlc');
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      if (streamer) {
        setName(streamer.name ?? '');
        setWahaID(streamer.wahaID ?? '');
        setWahaName(streamer.wahaName ?? '');
        setPhoneNumber(streamer.phoneNumber ?? '');
        setBankAccount(streamer.bankAccount ?? '');
        setBankAccountCUP(streamer.bankAccountCUP ?? '');
        setAllowInRoster(streamer.allowInRoster ?? true);
        setApplyPenalties(streamer.applyPenalties ?? true);
        setPenalized(streamer.penalized ?? true);
        setPaymentMethod(streamer.paymentMethod ?? 'mlc');
      } else {
        setName('');
        setWahaID('');
        setWahaName('');
        setPhoneNumber('');
        setBankAccount('');
        setBankAccountCUP('');
        setPaymentMethod('mlc');
        setAllowInRoster(true);
        setApplyPenalties(true);
        setPenalized(true);
      }
      setError('');
    }
  }, [open, streamer]);

  const validateForm = () => {
    if (!name.trim()) return 'El nombre es obligatorio';
    // if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(name)) return 'El nombre solo puede contener letras';

    if (!wahaID.trim()) return 'El waha ID es obligatorio';
    if (!/^\d+$/.test(wahaID)) return 'El waha ID debe contener solo números';

    if (!wahaName.trim()) return 'El nombre de waha es obligatorio';

    // if (phoneNumber?.trim() && !/^\d{8}$/.test(phoneNumber)) return "El teléfono debe tener exactamente 8 dígitos";

    // if (bankAccount?.trim() && !/^\d{16}$/.test(bankAccount)) return "La cuenta bancaria debe tener exactamente 16 dígitos";

    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (streamer) {
        await updateStreamer(streamer.id, {
          name,
          wahaID,
          wahaName,
          phoneNumber,
          bankAccount,
          bankAccountCUP,
          allowInRoster,
          applyPenalties,
          penalized,
          paymentMethod,
        });
      } else {
        await createStreamer({
          name,
          wahaID,
          wahaName,
          phoneNumber,
          bankAccount,
          bankAccountCUP,
          allowInRoster,
          applyPenalties,
          penalized,
          paymentMethod,
        });
      }
      onClose();
    } catch (err) {
      setError('Hubo un error al guardar el streamer' + err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{streamer ? 'Editar Streamer' : 'Adicionar Nuevo Streamer'}</DialogTitle>
          <DialogDescription>
            Por favor, completa los campos obligatorios. <b className="text-red-500">*</b>
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="wahaID">
              Waha ID <b className="text-red-500">*</b>
            </Label>
            <Input id="wahaID" value={wahaID} onChange={(e) => setWahaID(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="wahaName">
              Waha Nick <b className="text-red-500">*</b>
            </Label>
            <Input id="wahaName" value={wahaName} onChange={(e) => setWahaName(e.target.value)} />
            <Label htmlFor="phoneNumber">Teléfono</Label>
            <Input id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="number" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">
              Nombre <b className="text-red-500">*</b>
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Cuenta Bancaria</Label>
            <div className="flex flex-row items-center gap-2 p-2 border rounded">
              <Label htmlFor="bankAccount">MLC:</Label>
              <Input id="bankAccount" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
              <Label htmlFor="bankAccountCUP">CUP:</Label>
              <Input id="bankAccountCUP" value={bankAccountCUP} onChange={(e) => setBankAccountCUP(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-row justify-around">
            <div className="flex flex-col gap-2">
              <Label>Cotiza en Nómina:</Label>
              <div className="flex flex-row items-center gap-2">
                <Badge className={'bg-red-600'}>{'NO'}</Badge>
                <Switch id="allowInRoster" checked={allowInRoster} onCheckedChange={setAllowInRoster} />
                <Badge className={'bg-green-600'}>{'SÍ'}</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Recibe Penalizaciones:</Label>
              <div className="flex flex-row items-center gap-2">
                <Badge className={'bg-red-600'}>{'NO'}</Badge>
                <Switch id="applyPenalties" checked={applyPenalties} onCheckedChange={setApplyPenalties} />
                <Badge className={'bg-green-600'}>{'SÍ'}</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Penalizada:</Label>
              <div className="flex flex-row items-center gap-2">
                <Badge className={'bg-red-600'}>{'NO'}</Badge>
                <Switch id="penalized" checked={penalized} onCheckedChange={setPenalized} />
                <Badge className={'bg-green-600'}>{'SÍ'}</Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-around gap-2">
            <Label htmlFor="paymentMethod">Método de Pago:</Label>
            <div className="flex flex-row items-center gap-2 p-2 border rounded">
              <RadioGroup value={paymentMethod} id="paymentMethod" onValueChange={setPaymentMethod}>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="MLC" id="r1" />
                  <Label htmlFor="r1">MLC</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="cupTransfer" id="r2" />
                  <Label htmlFor="r2">CUP (Transferencia)</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="cupCash" id="r3" />
                  <Label htmlFor="r3">CUP (Efectivo)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex justify-end gap-2 w-full">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">{streamer ? 'Actualizar' : 'Guardar'}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StreamerModal;
