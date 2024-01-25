const apiUrl = 'http://localhost:3001'

export const fetchData = () => {
	return fetch(`${apiUrl}/guests`)
		.then(response => response.json())
		.then(data => data)
		.catch(error => {
			console.error('Hiba a lekérdezésben:', error)
			throw error
		})
}

export const postData = data => {
	return fetch(`${apiUrl}/guests`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json())
		.then(data => data)
		.catch(error => {
			console.error('Hiba a postolásban:', error)
			throw error
		})
}
