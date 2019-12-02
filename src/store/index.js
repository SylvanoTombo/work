import Vue from 'vue'
import Vuex from 'vuex'


import backend from './backend'
import app from './app'
import image from './image'
import annotation from './annotation'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      backend,
      app,
      image,
      annotation
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
