import { ApplicationStore } from "./store";
import Vue from 'vue';

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$store: ApplicationStore;
	}
}
