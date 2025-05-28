import DialogComponent from '@/components/Dialog';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import useStoreConfiguration from '@/context/useStoreConfiguration';
import { WeekWithData } from '@/types/weeks.types';
import { BanknoteArrowDown } from 'lucide-react';
import { useState } from 'react';

interface Props {
  week: WeekWithData;
}

const ExpensesWeekDialog = ({ week }: Readonly<Props>) => {
  const { expenses, changeExpenses } = useStoreConfiguration();
  const [currentExpenses, setCurrentExpenses] = useState(expenses);

  const handleSetExpenses = () => {
    changeExpenses(Number(currentExpenses));
  };

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
          <Button className="cursor-pointer bg-red-500 hover:bg-red-600" disabled={currentExpenses < 0} onClick={handleSetExpenses}>
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
          <Input
            id="expenses"
            placeholder={week.name}
            value={currentExpenses}
            onChange={(e) => setCurrentExpenses(Number(e.target.value))}
          />
        </div>
      </div>
    </DialogComponent>
  );
};

export default ExpensesWeekDialog;
