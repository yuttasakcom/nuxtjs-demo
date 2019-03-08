export const state = () => ({
  users: [],
  friends: [{ id: 1, name: 'YoYea' }],
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  GET_USER_BY_ID(state, id) {
    return state.users.find(user => user.id === id)
  },
}

export const actions = {
  setUsers(vuexContext, users) {
    vuexContext.commit('SET_USERS', users)
  },
}

export const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id === id)
  },
}
