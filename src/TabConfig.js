export function tabIcon(focused){
    return ({  
        Home: focused ? 'home' : 'home-outline',
        Mission: focused ? 'star' : 'star-outline',
        Notification: focused ? 'notifications' : 'notifications-outline',
        Profile: focused ? 'person' : 'person-outline'
    })
};
export function tabColor(focused){
    return ({
        Home: focused ? '#59B065' : 'black',
        Mission: focused ? '#D05D56' : 'black',
        Notification: focused ? '#3E95B5' : 'black',
        Profile: focused ? '#3E9F88' : 'black'
    })
};

export function iconColor(focused){
    return ({
        Home: focused ? '#193E1F' : 'black',
        Mission: focused ? '#69312E' : 'black',
        Notification: focused ? '#0A4459' : 'black',
        Profile: focused ? '#17473B' : 'black'
    })
};
