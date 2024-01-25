import React from 'react'
import './App.css'
import GuestForm from './components/GuestForm'
import MealSchedule from './components/MealSchedule'
import { Guest } from './interfaces/Guest'
import { fetchData } from './api/fetchData'
import LoadingComp from './components/LoadingComp'

function App() {
	const [guests, setGuests] = React.useState<Guest[]>([])
	const [loading, setLoading] = React.useState<boolean>(false)

	React.useEffect(() => {
		const fetchGuests = async () => {
			const guests = (await fetchData()) || []
			setGuests(guests)
		}
		fetchGuests()
	}, [])

	React.useEffect(() => {
		setLoading(guests.length === 0)
	}, [guests])

	return (
		<div className='App'>
			{loading && (
				<section>
					<LoadingComp />
				</section>
			)}
			{guests.length > 0 && (
				<section>
					<GuestForm
						guests={guests}
						setGuests={setGuests}
					/>
					<MealSchedule guests={guests} />
				</section>
			)}
		</div>
	)
}

export default App
