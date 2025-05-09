import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createSupportDataSlice, TSupportDataSlice } from "./slices/StoreConfigurationSlice";

const useStoreConfiguration = create<TSupportDataSlice>()(
	devtools((...args) => ({
		...createSupportDataSlice(...args),
	}))
);

export default useStoreConfiguration;
