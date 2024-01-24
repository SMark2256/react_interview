import React from 'react'
import { Guest } from '../interfaces/Guest'
import { GuestFormProps } from '../interfaces/Guest-form-props'

const GuestForm: React.FC<GuestFormProps> = ({ guests, setGuests }) => {
	const [formData, setFormData] = React.useState<Guest>({
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

	//Submit gombra kattintás kezelése - küldés
	const handleAddGuest = () => {
		setGuests((prevGuests: Guest[]) => [...prevGuests, formData])

		const updatedGuests = [...guests, formData]

		localStorage.setItem('guests', JSON.stringify(updatedGuests))

		setFormData({
			name: '',
			startDate: '',
			endDate: '',
		})
	}

	return (
		<div className='layout-column'>
			<form className='contact-form'>
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
						className='w-30'
						onClick={handleAddGuest}>
						Add to Menu
					</button>
				</div>
			</form>
		</div>
	)
}

export default GuestForm
