import React from 'react'
import { Guest } from '../interfaces/Guest'
import { postData } from '../api/fetchData'
import { sweetAlert } from './SweetAlert'
import { GuestFormProps } from '../interfaces/Guest-form-props'

const GuestForm: React.FC<GuestFormProps> = ({ setGuests }) => {
	const [formData, setFormData] = React.useState<Guest>({
		id: '',
		name: '',
		startDate: '',
		endDate: '',
		food: false,
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
	const handleAddGuest = async (e: any) => {
		e.preventDefault()

		if (!isStartDateBeforeEndDate()) {
			sweetAlert(
				'Input error',
				'Start date must be before End date!',
				'error',
			)
		} else {
			try {
				// Post Küldés
				const response = await postData(formData)
				console.log('Küldés eredménye:', response)
				sweetAlert(
					'Posted successfully',
					'Guest added successfully!',
					'success',
				)
				setGuests((prevGuests: Guest[]) => [...prevGuests, formData])
			} catch (error) {
				console.log('Küldés során hiba:', error)
				sweetAlert('Post error', error, 'error')
			}
		}
		setFormData({
			id: '',
			name: '',
			startDate: '',
			endDate: '',
			food: false,
		})
	}

	return (
		<div className='layout-column'>
			<form
				onSubmit={handleAddGuest}
				method='POST'
				className='contact-form'>
				<div className='layout-row align-items-center justify-content-center mt-50'>
					<input
						type='text'
						data-test-id='name-input'
						name='name'
						required
						placeholder='Guest Name'
						value={formData.name}
						onChange={handleInputChange}
					/>
					<input
						type='date'
						data-test-id='start-date'
						name='startDate'
						required
						placeholder='Start Date'
						value={formData.startDate}
						onChange={handleInputChange}
					/>
					<input
						type='date'
						data-test-id='end-date'
						name='endDate'
						required
						placeholder='End Date'
						value={formData.endDate}
						onChange={handleInputChange}
					/>
					<div>
						<label htmlFor='food'>Food tolerance</label>
						<input
							type='checkbox'
							data-test-id='food'
							name='food'
							required
							placeholder='Food tolerance'
							onChange={handleInputChange}
						/>
					</div>
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
