import { ConfigurationType } from '@/types/configuration.types';
import { StateCreator } from 'zustand';

export type TSupportDataSlice = {
  configuration: ConfigurationType;
  prize: number;
  expenses: number;
  changeConfiguration: (configuration: ConfigurationType) => void;
  changePrize: (prize: number) => void;
  changeExpenses: (expenses: number) => void;
};

export const createSupportDataSlice: StateCreator<TSupportDataSlice, [['zustand/devtools', never]], [], TSupportDataSlice> = (set) => ({
  configuration: {
    agencyName: '',
    payAffiliateProgram: false,
    payAffiliateProgramPercentage: 0,
    applyPenalties: false,
    penaltyPercentage: 0,
    mlcChangeRate: 0,
  },
  prize: 0,
  expenses: 0,
  changeConfiguration: (configuration: ConfigurationType) => {
    set({ configuration });
  },
  changePrize: (prize: number) => {
    set({ prize });
  },
  changeExpenses: (expenses: number) => {
    set({ expenses });
  },
});
