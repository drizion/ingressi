import { Image } from 'native-base'
import React from 'react'
import { styles } from './styles'

const ProfilePicture = () => {
  return (
    <Image
      style={styles.profilePicture} 
      source={{
        uri: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }}
      size={12}
      alt="Perfil"
    />
  )
}

export default ProfilePicture