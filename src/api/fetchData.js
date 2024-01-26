import { sweetAlert } from '../components/SweetAlert'

const apiUrl = 'http://localhost:3001'

// Vendégek lekérdezése
export const fetchData = () => {
	return fetch(`${apiUrl}/guests`, { timeout: 1000 })
		.then(response => response.json())
		.then(data => data)
		.catch(error => {
			if ((error.name = 'AbortError')) {
				sweetAlert('Error Backend cannot be reached', error, 'error')
			} else {
				console.error('Hiba a lekérdezésben:', error)
				sweetAlert('Error Get', error, 'error')
				throw error
			}
		})
}

// Vendék hozzáadás
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
			console.error('Hiba a postolás során:', error)
			throw error
		})
}
