import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getLevel from '../services/global/app/tasks/getLevel';

const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [level, setLevel] = useState({})
  const [mission, setMission] = useState({
    "level": 1,
    "title": "O início da jornada!",
    "description": "O fim do ensino fundamental é uma etapa muito importante na nossa vida, pois é um momento de escolhas... Portanto é necessário evitar que a vida se torne complexa devido a falta de acessibilidade das edições anteriores. Boa sorte!",
    "tasks": [{
      "taskId": 1,
      "title": "Leia a página de boas vindas",
      "description": "leia o post com titulo 'iniciando a jornada', para descobrir mais sobre o IFC",
      "checked": false
    }, {
      "taskId": 2,
      "title": "Como funciona os cursos técnicos integrados ao ensino médio?",
      "description": "leia o post com titulo 'tecnico integrado', para descobrir mais sobre o IFC",
      "checked": false
    }, {
      "taskId": 3,
      "title": "Conheça os cursos disponíveis no campus",
      "description": "leia o post com titulo 'cursos disponiveis', para descobrir mais sobre o IFC",
      "checked": false
    }]
  })
  const [completedLength, setCompletedLength] = useState(0)
  // mission.tasks.filter(task => task.checked).length


  function updateTasks(newMission) {
    setMission(newMission)
    setCompletedLength(newMission.tasks.filter(task => task.checked).length)
  }

  useEffect(()=>{
    async function loadStorageData() {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet(['@Ingressi:user', '@Ingressi:token'])
      if(storagedUser[1] && storagedToken[1]){
        setUser(JSON.parse(storagedUser[1]))
        setToken(storagedToken[1]);
      }
      setLoading(false);
    }
    loadStorageData();
  },[])

  async function signIn(data) {
    const {token, ...user} = data.result;
    setUser(user);
    setToken(token)
    try{
      await AsyncStorage.setItem('@Ingressi:user', JSON.stringify(user))
      await AsyncStorage.setItem('@Ingressi:token', token)
    }catch(e){
      console.log(e);
    }
  }
  async function signOut() {
    setUser(null)
    setToken(null)
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.log(e)  
    }
  }

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
    isMission: false,
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
  },
  {
    id: 70,
    title: "Veja as provas anteriores",
    featured: false,
    isMission: true,
    description: "Para ingressar em um campus do IFC, é necessário realizar uma prova de classificação. Você pode consultar as provas dos anos anteriores para estudar! Acesse o link de provas anteriores no fim dessa página, onde você será redirecionado para o site oficial do IFC.",
    links: [{text: "Acesse as provas anteriores aqui!", url: "https://ingresso.ifc.edu.br/2022/09/19/provas-e-gabaritos-exame-de-classificacao/"}],
    badge: "Missão",
    author: 'INGRESSI',
    badgeColor: "purple",
    imageUrl: "https://rodrigorenno.com/wp-content/uploads/2018/02/01efb-student2band2bexamination2bjokesx-600x356.jpg",
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
  }, {
    id: 2,
    title: "Biblioteca",
    description: "A biblioteca do campus conta com mais de...",
    bg: "green",
    type: "estrutura",
    checked: false,
    duration: "5 min"
  }, {
    id: 3,
    title: "Programa de Auxílio Estudantil",
    description: "O programa de Auxílio Estudantil é destinado para...",
    bg: "yellow",
    type: "vidaEstudantil",
    checked: false,
    duration: "30 min"
  }, {
    id: 4,
    title: "Horario Ensino Médio",
    description: "Horário atualizado para os cursos técnicos integrados ao ensino médio.",
    bg: "yellow",
    type: "vidaEstudantil",
    checked: false,
    duration: "5 min"
  }, {
    id: 5,
    title: "Provas Anteriores",
    description: "Veja as provas de classificação dos anos anteriores.",
    bg: "red",
    type: "ingresso",
    checked: false,
    duration: "30 min"
  }, {
    id: 6,
    title: "Edital de ingresso 2022",
    description: "Leia cuidadosamente o edital de ingresso.",
    bg: "red",
    type: "ingresso",
    checked: false,
    duration: "50 min"
  }])

  const [levels, setLevels] = useState([{
      "number": 1,
      "text": "O inicio",
      "color": "red"
    },{
      "number": 2,
      "text": "O teste",
      "color": "yellow"
    },{
      "number": 3,
      "text": "Outro",
      "color": "green"
    }])
  return (
    <AuthContext.Provider value={{ signIn, signOut, signed: !!user, user, levels, setUser, tasks, mission, setMission, posts, campusPosts, completedLength, updateTasks, loading, level, setLevel, token }}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext