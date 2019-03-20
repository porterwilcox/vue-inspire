import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

//utilize this _api for images, weather information, and a random quote
  //image endpoint --> /images
  //quote endpoint --> /quotes
  //weather endpoint --> /weather
const _api = Axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/',
	timeout: 5000
});

//utilize this _todoApi for all of your todo related HTTP requests
// Don't forget to change "YOURNAME" with your actual name
const _todoApi = Axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/danielfasula/todos',
  timeout: 5000
})

export default new Vuex.Store({
  state: {
    imageData: {},
    weatherData: {},
    quoteData: {},
    todos: {}
    //Add additional properties here that your application will care about
    //EXAMPLE: weatherData: {}
  },
  mutations: {
    imageData(state, data) {//this mutation will update the state and then envoke all of the functions of the observers that are watching the updated property
      state.imageData = data
    }, 
    weatherData(state, data) {
      state.weatherData = data
    },
    quoteData(state, data) {
      state.quoteData = data
    },
    todos(state, data) {
      state.todos = data
    }
  },
  actions: {
    getData({dispatch}) {
      dispatch('getImageData')
      dispatch('getQuoteData')
      dispatch('getWeatherData')
      dispatch('getTodos')
    },
    getImageData({commit}) {
      _api.get('images')
        .then(res => {
          console.log(res)
          commit('imageData', res.data)
        })
    },
    //below actions you'll need to complete
    getQuoteData({ commit }) {
      _api.get('quotes')
        .then(res => {
          commit('quoteData', res.data.quote)
      })
    },
    getWeatherData({ commit }) {
      _api.get('weather')
        .then(res => {
          let weatherPayload = { ...res.data.main, name: res.data.name, }
          console.log(weatherPayload)
          commit('weatherData', weatherPayload)
      })
    },
    getTodos({ commit }) {
      _api.get('danielfasula/todos')
        .then(res => {
          console.log(res)
          commit('todos', res.data.data)
        })
    },
    createTodo({ dispatch }, payload) {
      _api.post('danielfasula/todos', payload)
        .then(res => {
          dispatch('getData', payload)
      })
    },
    deleteTodo({ dispatch }, payload) {
      _api.delete(`danielfasula/todos/${payload}`)
        .then(res => {
          dispatch('getData', payload)
      })
    },
    editTodo({ dispatch }, payload) {
      _api.put(`danielfasula/todos/${payload._id}`, payload)
        .then(res => {
          dispatch('getData', payload)
        })
    }
    // you will need additional todo actions!
      //create
      //put
      //delete
  }
})
