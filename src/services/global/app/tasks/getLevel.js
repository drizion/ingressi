import api from "../../api";

const getLevel = async (id, token, level) => {
	try {	
		const { data } = await api.post('/user/level', {
			id, token, level
		})
		console.log('getLevel Service ok');
		return JSON.parse(JSON.stringify(data.result))
	} catch (error) {
		console.log(error.response.data)
	}
}

export default getLevel