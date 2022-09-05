export function tabIcon(focused){
    return ({  
        Home: focused ? 'home' : 'home-outline',
        Missoes: focused ? 'star' : 'star-outline',
        Chat: focused ? 'chatbox' : 'chatbox-outline',
        Perfil: focused ? 'person' : 'person-outline'
    })
};
export function tabColor(focused){
    return ({
        Home: focused ? '#59B065' : 'black',
        Missoes: focused ? '#D05D56' : 'black',
        Chat: focused ? '#3E95B5' : 'black',
        Perfil: focused ? '#3E9F88' : 'black'
    })
};

export function iconColor(focused){
    return ({
        Home: focused ? '#193E1F' : 'black',
        Missoes: focused ? '#69312E' : 'black',
        Chat: focused ? '#0A4459' : 'black',
        Perfil: focused ? '#17473B' : 'black'
    })
};
