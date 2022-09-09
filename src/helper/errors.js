export const getErrorMessage = (code) => {
    switch(code){
        case 1000: return 'O email está em uso por outro usuário'
        case 1001: return 'Esse nome de usuário não está disponível'
        case 1002: return 'Senha incorreta'
        case 1003: return 'O servidor está temporáriamente indisponível'
        case 1004: return 'Tente novamente mais tarde'
        case 1005: return 'Verifique a conexão com a internet'
        case 1006: return 'A senha precisa ter no mínimo 8 dígitos'
        case 1007: return 'Você não repetiu a senha corretamente'
        case 1008: return 'Você não inseriu um email válido'
        case 1009: return 'As senhas não são iguais'
        case 1010: return 'Sua sessão expirou, faça login novamente'
        case 1011: return 'Acesso negado, você não pode acessar esta página'
        case 1012: return 'Erro ao registrar'
        case 1013: return 'Usuário não encontrado'
        case 1014: return 'Não foi possível fazer login'
        case 1015: return 'Você precisa inserir uma senha'
        case 1016: return 'Algo deu errado'
        case 1017: return 'Você precisa inserir um nome de usuário'
    }
}