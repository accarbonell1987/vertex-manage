import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StreamingDataWithStreamer } from '@/types/streamingData.types';
import { ColumnTableType } from '@/types/table.types';
import ToolTip from './ToolTip';

interface FiltersInTableProps {
  defaultColumns: ColumnTableType[] | ColumnTableType<StreamingDataWithStreamer>[];
  visibleColumns: string[];
  rowsPerPage: number;
  setVisibleColumns: React.Dispatch<React.SetStateAction<string[]>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const FiltersInTable = ({
  defaultColumns,
  visibleColumns,
  rowsPerPage,
  setVisibleColumns,
  setRowsPerPage,
  setCurrentPage,
}: FiltersInTableProps) => {
  const toggleColumn = (key: string) => {
    setVisibleColumns((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <ToolTip content="Columnas Visibles">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Columnas Visibles</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {defaultColumns.map((column) => (
              <DropdownMenuCheckboxItem
                key={column.key}
                checked={visibleColumns.includes(column.key)}
                onCheckedChange={() => toggleColumn(column.key)}
              >
                {column.title}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </ToolTip>
      <div className="flex justify-end mb-2 sm:mb-0">
        <Select
          value={String(rowsPerPage)}
          onValueChange={(value) => {
            setRowsPerPage(Number(value));
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-full sm:w-36">
            <SelectValue placeholder="Registros por página" />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 50].map((num) => (
              <SelectItem key={num} value={String(num)}>
                {num} Registros
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FiltersInTable;
