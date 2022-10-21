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
      percent: 0,
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
    links: [{ text: "ir para o edital", link: "https://ingresso.ifc.edu.br" }],
    createdAt: 12345678,
    updatedAt: 12345678
  }])
  const [posts, setPosts] = useState([{
    id: 126,
    title: "Diminua sua ansiedade com esse método de estudos",
    description: "A psicóloga Andréia Bez do IFC-CAS reuniu as melhores dicas para evitar a ansiedade nos estudos",
    badge: "Dicas",
    author: 'Andréia Bez',
    badgeColor: "green",
    imageUrl: "https://picsum.photos/200/203",
    createdAt: "28/09/2022",
    links: [{
      text: "Google",
      url: "https://google.com"
    }, {
      text: "Abrir o YouTube",
      url: "https://youtube.com"
    }, {
      text: "me segue rsrs",
      url: "https://instagram.com/eu_drizion"
    }]
  },
  {
    id: 69,
    title: "Post em Destaque",
    featured: true,
    description: "esse é o post em destaque",
    badge: "Novidade!",
    author: 'Gabriel',
    badgeColor: "purple",
    imageUrl: "https://picsum.photos/202/210",
    createdAt: "28/09/2022"
  }])
  const [campusPosts, setCampusPosts] = useState([{
    id: 1,
    title: "Laboratórios de Informática",
    description: "Os laboratórios de informática",
    bg: "green",
    type: "estrutura",
    checked: false,
    duration: "5 min"
  },{
    id: 2,
    title: "Biblioteca",
    description: "A biblioteca do campus conta com mais de...",
    bg: "green",
    type: "estrutura",
    checked: false,
    duration: "5 min"
  },{
    id: 3,
    title: "Programa de Auxílio Estudantil",
    description: "O programa de Auxílio Estudantil é destinado para...",
    bg: "yellow",
    type: "vidaEstudantil",
    checked: false,
    duration: "30 min"
  },{
    id: 4,
    title: "Horario Ensino Médio",
    description: "Horário atualizado para os cursos técnicos integrados ao ensino médio.",
    bg: "yellow",
    type: "vidaEstudantil",
    checked: false,
    duration: "5 min"
  },{
    id: 5,
    title: "Provas Anteriores",
    description: "Veja as provas de classificação dos anos anteriores.",
    bg: "red",
    type: "ingresso",
    checked: false,
    duration: "30 min"
  },{
    id: 6,
    title: "Edital de ingresso 2022",
    description: "Leia cuidadosamente o edital de ingresso.",
    bg: "red",
    type: "ingresso",
    checked: false,
    duration: "50 min"
  }])
  return (
    <AuthContext.Provider value={{ signed, setSigned, user, setUser, tasks, posts, campusPosts }}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext