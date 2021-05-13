import { GetterTree } from "vuex";
import { ModuleOneState } from "./state";
import { RootState } from "@/store";

export type Getters = {
	propertyOne(state: ModuleOneState): string | null;
	propertyTwo(state: ModuleOneState): number | null;
};

export const getters: GetterTree<ModuleOneState, RootState> & Getters = {
	propertyOne: (state) => state.propertyOne,
	propertyTwo: (state) => state.propertyTwo,
};
