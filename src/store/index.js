import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({})], // 持久性存储(默认存在本地存储中)
  state: {
    isTabbarShow: true,
    cityName: '全国',
    cityId: 0,
    abbreviation: '',
    bannerList: [],
    categoryList: []
  },
  mutations: {
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    },
    changeCityName (state, name) {
      state.cityName = name
    },
    changeCityId (state, id) {
      state.cityId = id
    },
    changeCityAbbreviation (state, abbreviation) {
      state.abbreviation = abbreviation
    }
  },
  actions: {

  }
})
