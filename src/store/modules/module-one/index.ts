import { TypedModule, ModuleDefinition } from "typed-vuex-wrapper";
import { RootState, StoreTypes } from "@/store";
import { state } from "./state";
import { actions, Actions } from "./actions";
import { getters, Getters } from "./getters";
import { mutations, Mutations } from "./mutations";
import { ModuleOneState } from "./state";

export { ModuleOneState };

export type ModuleOneStore = TypedModule<
	RootState,
	ModuleOneState,
	Actions,
	Mutations,
	Getters,
	StoreTypes.MODULE_ONE
>;

export const store: ModuleDefinition<ModuleOneState, RootState> = {
	state,
	getters,
	mutations,
	actions,
	namespaced: true,
};
