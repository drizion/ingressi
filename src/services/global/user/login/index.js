import { useQuery } from '@tanstack/react-query'
import { createUseLoginKey } from './keys'
import api from '../../api'

const useLogin = () => {
    return useQuery(createUseLoginKey, (params = {}, options) => {
        api.post('/auth/authenticate', params).then(response => response.data)
    }, options)
}

export default useLogin