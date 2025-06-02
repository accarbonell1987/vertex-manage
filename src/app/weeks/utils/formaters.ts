import { Week } from '@/generated/prisma';
import { WeekWithData } from '@/types/weeks.types';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

export const formatWeek = (week: Week | null, formater: string = 'dddd, D [de] MMMM [de] YYYY'): WeekWithData | null => {
  if (!week) return null;

  // @ts-expect-error Property 'data' is missing in type '{ formattedStart: string; formattedEnd: string; name: string; id: string; date: Date; startDate: Date; endDate: Date; closed: boolean; observation: string | null; }' but required in type 'WeekWithData'.
  return {
    ...week,
    formattedStart: dayjs(week.startDate).locale('es').format(formater),
    formattedEnd: dayjs(week.endDate).locale('es').format(formater),
  };
};

export const getFormatedWeeks = (weeks: Week[] | null): WeekWithData[] => {
  if (!weeks) return [];

  return weeks.map((week) => formatWeek(week, 'dddd, D [de] MMMM [de] YYYY') as WeekWithData);
};
