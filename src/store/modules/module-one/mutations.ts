import { MutationTree } from "vuex";
import { ModuleOneState } from "./state";

export enum MutationTypes {
	SET_ALL = "SET_ALL",
	SET_PROPERTY_ONE = "SET_PROPERTY_ONE",
	SET_PROPERTY_TWO = "SET_PROPERTY_TWO",
}

export type Mutations<S = ModuleOneState> = {
	[MutationTypes.SET_ALL](state: S, payload: S): void;
	[MutationTypes.SET_PROPERTY_ONE](state: S, payload: string): void;
	[MutationTypes.SET_PROPERTY_TWO](state: S, payload: number): void;
};

export const mutations: MutationTree<ModuleOneState> & Mutations = {
	[MutationTypes.SET_ALL](state: ModuleOneState, payload: ModuleOneState) {
		state.propertyOne = payload.propertyOne;
		state.propertyTwo = payload.propertyTwo;
	},
	[MutationTypes.SET_PROPERTY_ONE](
		state: ModuleOneState,
		data: string
	) {
		state.propertyOne = data;
	},
	[MutationTypes.SET_PROPERTY_TWO](
		state: ModuleOneState,
		data: number
	) {
		state.propertyTwo = data;
	},
};
