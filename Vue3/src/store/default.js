/*
*  stores / main.js
*  用来声明store
* */
import  {defineStore} from 'pinia'

export const useDefaultStore = defineStore('default',{
    //声明state
    state:()=>({
        time:3
    }),
    //声明getters
    getters:{
      calcTime(state) {
          return state.time + 2
      }
    }
    //声明actions
})
