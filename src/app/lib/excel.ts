import { getFormatedNumberToTwoDecimal } from '@/lib/utils';
import { ImportedContactsData, ImportedStreamingData, StreamerWithReferals } from '@/types/streamers.types';
import { StreamingDataWithStreamer } from '@/types/streamingData.types';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

export function exportStreamersToExcel(streamers: StreamerWithReferals[]) {
  const data = streamers.map((s) => ({
    WahaID: s.wahaID,
    WahaName: s.wahaName,
    Nombre: s.name,
    Teléfono: s.phoneNumber ?? '',
    CuentaBancaria: s.bankAccount ?? '',
    Referidos: s.referals?.length ?? 0,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Streamers');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

  saveAs(blob, `streamers-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export function exportDataForAdminToExcel(dataToExport: StreamingDataWithStreamer[]) {
  const data = dataToExport
    .map((s) => ({
      WahaID: s.streamer.wahaID,
      WahaName: s.streamer.wahaName,
      Teléfono: s.streamer.phoneNumber ?? '',
      CuentaBancaria: s.streamer.bankAccount ?? '',
      DiamantesTotal: s.diamondsTotal,
      DiamantesComisiones: s.diamondsComisions,
      Salario: getFormatedNumberToTwoDecimal(s.streamerSalary),
      Penalizaciones: getFormatedNumberToTwoDecimal(s.streamerPenalizated ?? 0),
      SalarioFinal: getFormatedNumberToTwoDecimal(s.streamerSalary - (s.streamerPenalizated ?? 0) + (s?.referralSalary ?? 0)),
      Agencia: getFormatedNumberToTwoDecimal(s.agencySalary + (s.streamerPenalizated ?? 0) - (s?.referralSalary ?? 0)),
      BonosAgencia: getFormatedNumberToTwoDecimal(s.agencyBonus ?? 0),
    }))
    .filter((s) => s.SalarioFinal > 0);

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Semana');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

  saveAs(blob, `week-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export function exportDataForAgencyToExcel(dataToExport: StreamingDataWithStreamer[]) {
  const data = dataToExport
    .map((s) => ({
      WahaID: s.streamer.wahaID,
      WahaName: s.streamer.wahaName,
      DiamantesTotal: s.diamondsTotal,
      Salario: getFormatedNumberToTwoDecimal(s.streamerSalary),
      Penalizaciones: getFormatedNumberToTwoDecimal(s.streamerPenalizated ?? 0),
      SalarioFinal: getFormatedNumberToTwoDecimal(s.streamerSalary - (s.streamerPenalizated ?? 0) + (s?.referralSalary ?? 0)),
    }))
    .filter((s) => s.SalarioFinal > 0);

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Semana');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

  saveAs(blob, `week-${new Date().toISOString().slice(0, 10)}.xlsx`);
}

export function parseStreamingExcel(file: File): Promise<ImportedStreamingData[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as unknown[][];

      const parsed: ImportedStreamingData[] = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];

        const wahaID = String(row[2])?.trim(); // Columna 3

        if (!wahaID || isNaN(Number(wahaID))) continue;

        parsed.push({
          wahaID,
          wahaName: String(row[3])?.trim(),
          baseSalaryIM: Number(row[5]),
          baseSalaryRoom: Number(row[6]),
          diamondsIM: Number(row[7]),
          diamondsRoom: Number(row[8]),
          diamondsTotal: Number(row[9]),
          points: Number(row[10]),
          diamondsAndPoints: Number(row[11]),
          diamondsPenalties: Number(row[12]),
          numberOfDaysCompleted: Number(row[13]),
          numberOfDaysInMic: Number(row[14]),
          diamondsComisions: Number(row[15]),
          rewardOfPoints: Number(row[16]),
          dailyBonusOfSuperStreamer: Number(row[17]),
          roomBonus: Number(row[18]),
          enchantingGoddessBonus: Number(row[19]),
          streamerSalary: Number(row[21]),
          agencySalary: Number(row[22]),
        });
      }

      resolve(parsed);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

export function parseContactsExcel(file: File): Promise<ImportedContactsData[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as unknown[][];

      const parsed: ImportedContactsData[] = [];

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const wahaID = String(row[3])?.trim();

        if (!wahaID || isNaN(Number(wahaID))) continue;

        parsed.push({
          wahaID,
          name: String(row[1])?.trim(),
          phoneNumber: String(row[2])?.trim(),
          bankAccount: String(row[4])?.trim(),
        });
      }

      resolve(parsed);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}
