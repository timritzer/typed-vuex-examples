import { ActionTree, AugmentedActionContext } from "typed-vuex-wrapper";
import { ModuleOneState, initialState } from "./state";
import { Mutations, MutationTypes } from "./mutations";
import { RootState } from "@/store";

export enum HelpContextActionTypes {
	SET_PROPERTY_ONE = "SET_PROPERTY_ONE",
	SET_PROPERTY_TWO = "SET_PROPERTY_TWO",
	RESET = "RESET",
}

type context = AugmentedActionContext<Mutations, ModuleOneState, RootState>;
export interface Actions {
	[HelpContextActionTypes.SET_PROPERTY_ONE](
		{
			commit,
			state,
		}: AugmentedActionContext<Mutations, ModuleOneState, RootState>,
		payload: string
	): void;
	[HelpContextActionTypes.SET_PROPERTY_TWO](
		{
			commit,
			state,
		}: AugmentedActionContext<Mutations, ModuleOneState, RootState>,
		payload: number
	): void;
	[HelpContextActionTypes.RESET]({ commit }: context): Promise<void>;
}

export const actions: ActionTree<ModuleOneState, RootState> & Actions = {
	[HelpContextActionTypes.SET_PROPERTY_ONE](
		{ commit },
		payload: string
	) {
		commit(MutationTypes.SET_PROPERTY_ONE, payload);
	},
	[HelpContextActionTypes.SET_PROPERTY_TWO](
		{ commit },
		payload: number
	) {
		commit(MutationTypes.SET_PROPERTY_TWO, payload);
	},
	async [HelpContextActionTypes.RESET]({ commit }) {
		const data = initialState();
		commit(MutationTypes.SET_ALL, data);
	},
};
