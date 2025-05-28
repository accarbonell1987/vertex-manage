import DialogComponent from '@/components/Dialog';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import useStoreConfiguration from '@/context/useStoreConfiguration';
import { WeekWithData } from '@/types/weeks.types';
import { BanknoteArrowDown } from 'lucide-react';

interface Props {
  week: WeekWithData;
}

const ExpensesWeekDialog = ({ week }: Readonly<Props>) => {
  const { expenses, changeExpenses } = useStoreConfiguration();

  return (
    <DialogComponent
      title="Gastos de la Semana"
      description="Establezca el gasto de la semana"
      trigger={
        <Button className="cursor-pointer">
          <BanknoteArrowDown />
        </Button>
      }
      actionButton={
        <DialogClose asChild>
          <Button
            className="cursor-pointer bg-red-500 hover:bg-red-600"
            disabled={expenses >= 0}
            onClick={() => changeExpenses(Number(expenses))}
          >
            <BanknoteArrowDown /> Establecer
          </Button>
        </DialogClose>
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>
            Para establecer el gasto, ingresa el gasto de la semana <b className="text-red-600">{week.name}</b>
          </span>
          <Input id="expenses" placeholder={week.name} value={expenses} onChange={(e) => changeExpenses(Number(e.target.value))} />
        </div>
      </div>
    </DialogComponent>
  );
};

export default ExpensesWeekDialog;
