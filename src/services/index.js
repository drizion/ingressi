import { authenticate, checkToken, register, resetPassword } from './api/auth'
import { getUserData, getUsers } from './api/user'

const api = { authenticate, checkToken, register, resetPassword, getUserData, getUsers }

export default api
