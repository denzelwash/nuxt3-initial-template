import { defineStore, acceptHMRUpdate } from 'pinia'

export const useBase = defineStore('base', () => {})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useBase, import.meta.hot))
}
