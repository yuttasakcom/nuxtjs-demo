import Axios from 'axios'

export const strict = true

export const actions = {
  async nuxtServerInit({ dispatch }) {
    const { data } = await Axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    dispatch('users/setUsers', data)
  },
}
