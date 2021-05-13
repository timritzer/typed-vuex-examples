
export interface ModuleOneState {
	propertyOne: string | null,
	propertyTwo: number | null
}

// State object
export const initialState: () => ModuleOneState = () => {
	return {
		propertyOne: null,
		propertyTwo: null,
	};
};

export const state: ModuleOneState = initialState();