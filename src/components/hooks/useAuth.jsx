import { useContext } from 'react'
import AuthContext from '../PfpManagement/AuthProvider'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
