import React from 'react'
import './App.css'
import GuestForm from './components/GuestForm'
import MealSchedule from './components/MealSchedule'
import { Guest } from './interfaces/Guest'

function App() {
	const [guests, setGuests] = React.useState<Guest[]>(() => {
		const storedGuestsJSON = localStorage.getItem('guests')
		const storedGuests = JSON.parse(storedGuestsJSON || '[]') as Guest[]
		return storedGuests
	})

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
