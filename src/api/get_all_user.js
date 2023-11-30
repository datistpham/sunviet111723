import axios from 'axios'
import { API_URL } from 'src/config'

const getAllUser = async (token) => {
  try {
    const res = await axios({
      url: API_URL + '/api/v2/users',
      method: 'get',
      // params: {...data},
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    const result = await res.data
    return result
  } catch (error) {
    return { error: error.response.data.error, ok: false }
  }
}

export default getAllUser
