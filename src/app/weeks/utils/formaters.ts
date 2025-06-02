import { Week } from '@/generated/prisma';
import { WeekWithData } from '@/types/weeks.types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatWeek = (week: Week | null, formater: string = 'PPPP'): WeekWithData | null => {
  if (!week) return null;

  // @ts-expect-error Property 'data' is missing in type '{ formattedStart: string; formattedEnd: string; name: string; id: string; date: Date; startDate: Date; endDate: Date; closed: boolean; observation: string | null; }' but required in type 'WeekWithData'.
  return {
    ...week,
    formattedStart: format(new Date(week.startDate), formater, { locale: es }),
    formattedEnd: format(new Date(week.endDate), formater, { locale: es }),
  };
};

export const getFormatedWeeks = (weeks: Week[] | null): WeekWithData[] => {
  if (!weeks) return [];

  return weeks.map((week) => formatWeek(week, 'PPPP') as WeekWithData);
};
