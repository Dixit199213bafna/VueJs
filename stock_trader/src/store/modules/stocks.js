import stocks from '../../data/stocks'
console.log(stocks)
const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round((1 + Math.random() - 0.5) * stock.price)
    })
  }
}

const actions = {
  buyStocks: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => state.stocks
}

export default {
  state,
  mutations,
  actions,
  getters
}