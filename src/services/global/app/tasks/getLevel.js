import api from "../../api";

const getLevel = async (id, token, level) => {
	const { data } = await api.post('/user/level', {
		id, token, level
	})
	return JSON.parse(JSON.stringify(data.result))
}

export default getLevel