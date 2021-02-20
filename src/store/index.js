import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({})],
  state: {
    isTabbarShow: true,
    cityName: '全国',
    cityId: 0,
    abbreviation: '',
    bannerList: [],
    categoryList: [],
    searchList: []
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
    },
    setSearchMutation (state, data) {
      state.searchList = data
    },
    clearSearchMutation (state) {
      state.searchList = []
    }
  },
  actions: {
    getSearchListAction (store, text) {
      return axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=&category=&keywords=${text}&venue_id=&start_time=&show_ids=&page=1`).then((res) => {
        store.commit('setSearchMutation', res.data.data.list)
      })
    }
  }
})
