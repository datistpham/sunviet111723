import axios from 'axios'
import { API_URL } from 'src/config'

const deleteModApi = async (data, token) => {
  try {
    const res = await axios({
      url: API_URL + '/api/v2/mods',
      method: 'delete',
      // params: {...data},
      data: {
        ...data,
      },
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

export default deleteModApi
