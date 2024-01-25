import React from 'react'
import { Guest } from '../interfaces/Guest'
import { GuestFormProps } from '../interfaces/Guest-form-props'
import { postData } from '../api/fetchData'

const GuestForm: React.FC<GuestFormProps> = ({ guests, setGuests }) => {
	const [formData, setFormData] = React.useState<Guest>({
		id: '',
		name: '',
		startDate: '',
		endDate: '',
	})

	//Input mezők változásának kezelése
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const isStartDateBeforeEndDate = () => {
		const { startDate, endDate } = formData
		return new Date(startDate) <= new Date(endDate)
	}

	//Submit gombra kattintás kezelése - küldés
	const handleAddGuest = async () => {
		if (!isStartDateBeforeEndDate()) {
			alert('Start date must be before end date!')
			return
		}

		try {
			// Post Küldés
			const response = await postData(formData)
			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.log('Küldés során hiba:', error)
			throw error
		}

		setFormData({
			id: '',
			name: '',
			startDate: '',
			endDate: '',
		})
	}

	return (
		<div className='layout-column'>
			<form
				onSubmit={handleAddGuest}
				className='contact-form'>
				<div className='layout-row align-items-center justify-content-center mt-50'>
					<input
						type='text'
						data-test-id='name-input'
						name='name'
						required
						placeholder='Guest Name'
						onChange={handleInputChange}
					/>
					<input
						type='date'
						data-test-id='start-date'
						name='startDate'
						required
						placeholder='Start Date'
						onChange={handleInputChange}
					/>
					<input
						type='date'
						data-test-id='end-date'
						name='endDate'
						required
						placeholder='End Date'
						onChange={handleInputChange}
					/>
				</div>
				<div className='layout-row align-items-center justify-content-center mt-50'>
					<button
						data-test-id='submit-button'
						className='w-30'>
						Add to Menu
					</button>
				</div>
			</form>
		</div>
	)
}

export default GuestForm
