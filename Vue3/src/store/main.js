/*
*  stores / main.js
*  用来声明store
* */
import {defineStore} from 'pinia'
import {useDefaultStore} from '@/store/default'

export const useMainStore = defineStore('main', {
    //声明state
    state: () => ({
        name: '123',
        count: 45,
    }),
    //声明getters
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        doubleCountPlus() {
            return (a) => {
                return this.doubleCount + a;
            }
        },
        addDefault(state) {
            const {calcTime} = useDefaultStore()
            return state.count + calcTime
        }

    }
    //声明actions
})
