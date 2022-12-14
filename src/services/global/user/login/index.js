import { useQuery } from '@tanstack/react-query'
import api from '../../api'

const useLogin = (params = {}, options) => {
    return useQuery(['user'], () => 
        api.post('/auth/authenticate', params)
        .then(response => response.data)
        .catch(err => err.message)
    , options)
}

export default useLogin