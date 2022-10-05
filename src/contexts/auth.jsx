import React, { createContext, useState } from 'react';

const AuthContext = createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: "Estudante",
        picture: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c182026/tanaka-chivanga.jpg",
        level: 1,
        percent: 16,
        mission: {
            id: 1,
            max: 4,
            percent: 25,
            title: "O inicio",
            thumbnail: "https://avatars.githubusercontent.com/u/84392895?s=500&v=4"
        }
    })
    const [signed, setSigned] = useState(!!user)
    const [tasks, setTasks] = useState([{
        id: 123,
        level: 1,
        index: 0,
        title: "titulo da missão (state)",
        content: "conteúdo da missão (state)",
        image: "imagem da missão (state)",
        links: [{text: "ir para o edital", link: "https://ingresso.ifc.edu.br"}],
        createdAt: 12345678,
        updatedAt: 12345678
    }])
    const [posts, setPosts] = useState([{
        id: 123,
        title: 'titulo da postagem',
        description: 'descrição do post ',
        author: 'autor',
        badge: 'badge',
        badgeColor: 'purple',
        imageUrl: 'https://picsum.photos/100/100',
        createdAt: '12/34/56',
        updatedAt: '12/34/56'
    },{
        id: 124,
        title: "Pesquisa mostra que 87% dos alunos...",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. In dictum non consectetur a erat nam at lectus urna. Turpis cursus in hac habitasse platea. Libero id faucibus nisl tincidunt eget nullam non. Suspendisse in est ante in nibh mauris. Lorem dolor sed viverra ipsum. Amet est placerat in egestas erat imperdiet sed euismod. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Eget nunc scelerisque viverra mauris in aliquam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Est ante in nibh mauris cursus mattis molestie a iaculis. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Velit scelerisque in dictum non consectetur a. Sit amet nisl purus in mollis nunc sed id semper. Blandit aliquam etiam erat velit scelerisque in dictum non. Orci ac auctor augue mauris augue neque gravida. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Consequat nisl vel pretium lectus quam. Justo laoreet sit amet cursus sit amet dictum. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Tellus mauris a diam maecenas sed enim ut. In cursus turpis massa tincidunt dui ut ornare lectus. Mattis enim ut tellus elementum sagittis vitae. Augue eget arcu dictum varius duis at consectetur lorem. Vitae tortor condimentum lacinia quis. Maecenas sed enim ut sem. Etiam sit amet nisl purus in mollis nunc. Mattis nunc sed blandit libero volutpat sed. In fermentum posuere urna nec tincidunt praesent semper. Urna condimentum mattis pellentesque id nibh. In nisl nisi scelerisque eu ultrices vitae auctor eu. Volutpat blandit aliquam etiam erat velit scelerisque. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Varius quam quisque id diam vel quam elementum. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Ipsum dolor sit amet consectetur adipiscing elit. Consequat interdum varius sit amet mattis vulputate enim nulla. Vel facilisis volutpat est velit egestas dui id ornare arcu. Enim ut tellus elementum sagittis. Dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet massa. Orci dapibus ultrices in iaculis nunc sed augue. Odio eu feugiat pretium nibh. Tortor dignissim convallis aenean et tortor at risus. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Varius morbi enim nunc faucibus a pellentesque sit amet. Consectetur libero id faucibus nisl. Lectus arcu bibendum at varius vel pharetra. Nunc sed velit dignissim sodales ut eu sem integer vitae. Feugiat in fermentum posuere urna nec tincidunt. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Id aliquet lectus proin nibh nisl condimentum. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Orci a scelerisque purus semper eget. Sagittis aliquam malesuada bibendum arcu vitae. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Ornare lectus sit amet est placerat in egestas erat imperdiet. Curabitur vitae nunc sed velit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Tempus urna et pharetra pharetra massa massa ultricies mi. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Id volutpat lacus laoreet non curabitur gravida arcu ac. Ornare lectus sit amet est placerat in egestas. Tortor id aliquet lectus proin nibh. Id eu nisl nunc mi ipsum. Purus sit amet volutpat consequat mauris. Feugiat in ante metus dictum at tempor. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nisi porta lorem mollis aliquam ut porttitor. Quam lacus suspendisse faucibus interdum posuere. Tellus orci ac auctor augue. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Auctor elit sed vulputate mi sit amet. Convallis convallis tellus id interdum velit laoreet id. Risus sed vulputate odio ut. Nunc id cursus metus aliquam. Pellentesque habitant morbi tristique senectus. Convallis posuere morbi leo urna. Eu consequat ac felis donec et odio pellentesque diam volutpat. Porttitor leo a diam sollicitudin tempor id eu. Nunc sed augue lacus viverra vitae congue eu consequat. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Pretium viverra suspendisse potenti nullam ac tortor. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Rhoncus mattis rhoncus urna neque viverra justo nec. Amet massa vitae tortor condimentum lacinia quis vel eros. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Venenatis tellus in metus vulputate eu. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vel risus commodo viverra maecenas accumsan. Pulvinar pellentesque habitant morbi tristique senectus et netus. Metus dictum at tempor commodo ullamcorper a. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. At auctor urna nunc id cursus metus. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Arcu risus quis varius quam quisque id diam vel. Ante in nibh mauris cursus mattis molestie. Augue neque gravida in fermentum et sollicitudin. Elementum nisi quis eleifend quam adipiscing vitae. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Orci ac auctor augue mauris augue neque gravida. In eu mi bibendum neque egestas congue. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Ac tincidunt vitae semper quis. Id venenatis a condimentum vitae sapien pellentesque. Posuere morbi leo urna molestie at elementum eu. Scelerisque fermentum dui faucibus in ornare quam. Imperdiet dui accumsan sit amet nulla facilisi. Malesuada pellentesque elit eget gravida cum sociis natoque. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Quisque id diam vel quam elementum pulvinar etiam non quam. Nunc sed id semper risus in hendrerit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Varius vel pharetra vel turpis. Consectetur adipiscing elit duis tristique. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Lorem ipsum dolor sit amet consectetur adipiscing. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Amet nulla facilisi morbi tempus iaculis urna id. Orci dapibus ultrices in iaculis. Sed augue lacus viverra vitae congue eu consequat. Cursus risus at ultrices mi tempus imperdiet. Velit dignissim sodales ut eu sem integer vitae. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Pellentesque habitant morbi tristique senectus et. Velit aliquet sagittis id consectetur purus ut. Commodo nulla facilisi nullam vehicula. Sit amet risus nullam eget felis eget. Arcu dui vivamus arcu felis bibendum ut tristique et. Sed sed risus pretium quam vulputate dignissim suspendisse in. Porttitor lacus luctus accumsan tortor posuere ac ut. Vel orci porta non pulvinar. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Amet cursus sit amet dictum sit amet justo. In vitae turpis massa sed elementum. In arcu cursus euismod quis viverra nibh cras pulvinar. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Convallis tellus id interdum velit laoreet id. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Proin nibh nisl condimentum id. Mattis aliquam faucibus purus in massa tempor nec. Scelerisque eu ultrices vitae auctor eu augue. Condimentum lacinia quis vel eros donec ac odio.",
        badge: "Notícias", 
        badgeColor: "red",
        imageUrl: "https://picsum.photos/100/101",
        createdAt: "28/09/2022"
    },
    {
        id: 125,
        title: "Gremio estudantil desenvolve projeto com calouros",
        description: "Professores apoiam o projeto e criam atividades interdisciplinares juto aos calouros do instituto",
        badge: "Notícias", 
        badgeColor: "red",
        imageUrl: "https://picsum.photos/100/102",
        createdAt: "28/09/2022"
    },
    {
        id: 126,
        title: "Diminua sua ansiedade com esse método de estudos",
        description: "A psicóloga Andréa Bez do IFC-CAS reuniu as melhores dicas para evitar a ansiedade nos estudos",
        badge: "Dicas", 
        badgeColor: "green",
        imageUrl: "https://picsum.photos/100/103",
        createdAt: "28/09/2022"
    },
    {
        id: 127,
        title: "Novo edital de Auxílio Estudantil",
        description: "O edital 2022/2 do PAE conta com uma nova modalidade de auxílios para alunos com extrema vulnerabilidade",
        badge: "PAE", 
        badgeColor: "yellow",
        imageUrl: "https://picsum.photos/101/100",
        createdAt: "28/09/2022"
    },
    {
        id: 128,
        title: "Novo curso superior será aberto em 2024",
        description: "Em 2024, iniciará o curso de Bacharelado em Sistemas de Informação no IFC",
        badge: "Veteranos", 
        badgeColor: "orange",
        imageUrl: "https://picsum.photos/102/100",
        createdAt: "28/09/2022"
    }])

    return (
        <AuthContext.Provider value={{signed: signed, setSigned, user, setUser, tasks, posts}}>{props.children}</AuthContext.Provider>
)}

export default AuthContext