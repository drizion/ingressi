import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getLevel from '../services/global/app/tasks/getLevel';
import api from '../services/global/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Toast } from 'native-base';

const AuthContext = createContext({})

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [mission, setMission] = useState()
  const [tasks, setTasks] = useState()
  const [completedTasks, setCompletedTasks] = useState(0)
  const [maxLevel, setMaxLevel] = useState(1)

  function updateTasks(newTasks) {
    setTasks(newTasks)
    setCompletedTasks(newTasks?.filter(task => task.completed).map(task => task.id))
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        const [storagedUser, storagedToken] = await AsyncStorage.multiGet(['@Ingressi:user', '@Ingressi:token'])
        if (storagedUser[1] && storagedToken[1]) {
          setUser(JSON.parse(storagedUser[1]))
          setToken(storagedToken[1]);
          getUserLevel(JSON.parse(storagedUser[1])?.id, storagedToken[1], (Math.max(...JSON.parse(storagedUser[1])?.gamification?.map(o => o.level)) || 1))
        }
        setLoading(false);
      } catch (e) {
        console.log(e)
      }
    }
    try {
      loadStorageData();
    } catch (e) {
      console.log('ocorreu um erro, fazendo logout');
      signOut()
    }
  }, [])

  async function getUserLevel(id, token, level, options = {}) {
    if(options?.toast) {
      Toast.show({description: `Carregando nível ${level}. Aguarde!`})
    }
    if(options?.congratulations) {
      Toast.show({description: `Parabéns por passar de nível! Estamos preparando suas tarefas :D`})
    }
    try {
      const userLevel = await getLevel(id, token, level)
      setMission(userLevel?.mission)
      setTasks(userLevel?.tasks)
      setCompletedTasks(userLevel?.tasks?.filter(task => task?.completed).map(task => task.id))
      
    } catch (error) {
      console.log('getUserLevel error', error)
    }
  }
  const updateMutation  = useMutation(async ({token})=>{
    const { data } = await api.post('/auth/authenticate', {
      token
    })
    return data;
  }, {
    onSuccess : (data)=>{
      console.log('update com sucesso')
      signIn(data)
    },
    onError: (error, variables, context) => {
      console.log("ocorreu um erro de autenticação")
      // Toast.show({description: "Há algum problema em sua conta... Saia e faça login novamente."})
    }
  })
  async function refreshData() {
      console.log("Salvando...")
      updateMutation.mutate({token})
  }

  async function signIn(data) {
    const { token, ...user } = data.result;
    setUser(user);
    setToken(token)
    try {
      await AsyncStorage.setItem('@Ingressi:user', JSON.stringify(user))
      await AsyncStorage.setItem('@Ingressi:token', token)
      await getUserLevel(user?.id, token, (Math.max(...user?.gamification?.map(o => o.level)) || 1))
      console.log('Credenciais armazenadas no dispositivo!');
    } catch (e) {
      console.log(e);
    }
  }
  async function signOut() {
    setUser(null)
    setToken(null)
    try {
      await AsyncStorage.clear()
      setLoading(false)
      console.log('logout realizado com sucesso');
    } catch (e) {
      console.log(e)
    }
  }


  async function nextLevel() {
    try {
      // console.log(mission?.number+1);
      await getUserLevel(null, token, mission?.number+1, {congratulations: true})
    } catch (error) {
      console.log('nextLevel error', error)
    }
  }



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
    links: [{ text: "Acesse as provas anteriores aqui!", url: "https://ingresso.ifc.edu.br/2022/09/19/provas-e-gabaritos-exame-de-classificacao/" }],
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
  }, {
    "number": 2,
    "text": "Decisão",
    "color": "yellow"
  }])
  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      signed: !!user, 
      user, 
      levels, 
      setUser, 
      tasks, 
      mission, 
      setMission, 
      posts, 
      campusPosts, 
      completedTasks, 
      updateTasks, 
      loading, 
      token,
      refreshData,
      nextLevel,
      getUserLevel
    }}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext