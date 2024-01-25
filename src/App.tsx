import React from 'react'
import './App.css'
import GuestForm from './components/GuestForm'
import MealSchedule from './components/MealSchedule'
import { Guest } from './interfaces/Guest'
import { fetchData } from './api/fetchData'

function App() {
	const [guests, setGuests] = React.useState<Guest[]>([])

	React.useEffect(() => {
		const fetchGuests = async () => {
			const guests = await fetchData()
			setGuests(guests)
		}
		fetchGuests()
	}, [])

	return (
		<div className='App'>
			<GuestForm
				guests={guests}
				setGuests={setGuests}
			/>
			<MealSchedule guests={guests} />
		</div>
	)
}

export default App
