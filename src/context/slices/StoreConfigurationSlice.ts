import { ConfigurationType } from "@/types/configuration.types";
import { StateCreator } from "zustand";

export type TSupportDataSlice = {
	configuration: ConfigurationType;
	changeConfiguration: (configuration: ConfigurationType) => void;
};

export const createSupportDataSlice: StateCreator<TSupportDataSlice, [["zustand/devtools", never]], [], TSupportDataSlice> = (set) => ({
	configuration: {
		agencyName: "",
		payAffiliateProgram: false,
		payAffiliateProgramPercentage: 0,
		applyPenalties: false,
		penaltyPercentage: 0,
	},
	changeConfiguration: (configuration: ConfigurationType) => {
		set({ configuration });
	},
});
