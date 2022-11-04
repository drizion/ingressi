import { useQuery } from '@tanstack/react-query'
import api from '../../api'

const usePosts = (params = {}, options) => {
    return useQuery(['posts'], () => 
        api.get('/app/getposts', params)
        .then(response => response.data)
        .catch(err => err.message)
    , options)
}

export default usePosts