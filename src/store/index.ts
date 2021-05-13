import { createStore, createLogger, StoreType } from "typed-vuex-wrapper";
import {
	ModuleOneStore,
	store as moduleOneModule,
	ModuleOneState,
} from "@/store/modules/module-one";

//Define all modules at all depths here. This will be the "source of truth" for module namespaces
export enum StoreTypes {
	MODULE_ONE = "moduleOne",
}

//To add a submodule:
/* To add a submodule:
 * Add to the StoreTypes enum above 
 * (ex MODULE_ONE__SUBMODULE = "moduleOne/submodule",)
 * NOTE: include the parent module in the path, and the name
 * In the module you are adding to, merge the submodule types into the module type
 * ex
 * SiteSettingsStore = ...	& TypedModule<RootState, SubmoduleState, SubmoduleActions, SubmoduleMutations, SubmoduleGetters, StoreTypes.MODULE_ONE__SUBMODULE>
 * And finally add the submodule to the actual module
 * ex:
 *	modules: {
		[getModuleName(StoreTypes.MODULE_ONE__SUBMODULE)]: {
			state,
			getters,
			mutations,
			actions,
		}
	})
 *
 */

export function getModuleName(storeType: StoreTypes) {
	const lastNamespace = storeType.lastIndexOf("/");
	return storeType.substr(lastNamespace + 1);
}

export type RootState = {
	moduleOne: ModuleOneState;
};

//Define all available top level store modules here (Not submodules)
//Cast to typed version to infer all the structure
const modules = {
	[StoreTypes.MODULE_ONE]: (moduleOneModule as unknown) as ModuleOneStore,
};

//Add in the logger for dev purposes
const debug = process.env.NODE_ENV !== "production";

export const store = createStore({
	state: {} as RootState,
	modules: modules,
	plugins: debug ? [createLogger({})] : [],
});

export type ApplicationStore = typeof store;

declare module "typed-vuex-wrapper" {
	export interface StoreType extends ApplicationStore {} // eslint-disable-line
}