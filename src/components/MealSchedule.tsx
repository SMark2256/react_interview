import React from 'react'
import { MealScheduleProps } from '../interfaces/Meal-schedule-props'
import { DateWithName } from '../interfaces/Date-name'

const MealSchedule: React.FC<MealScheduleProps> = ({ guests }) => {
	//start és end date közötti összes dátumot visszaadja
	const getDatesBetween = (
		startDate: string,
		endDate: string,
	): DateWithName[] => {
		const dates: DateWithName[] = []
		let currentDate = new Date(startDate)
		const endDateTime = new Date(endDate)

		while (currentDate <= endDateTime) {
			const formattedDate = currentDate.toISOString().split('T')[0]
			dates.push({ date: formattedDate, names: [] })
			currentDate.setDate(currentDate.getDate() + 1)
		}

		return dates
	}

	//guests tömbből kiszedi az összes dátumot és a neveket
	const allDates: DateWithName[] = guests.reduce((acc, guest) => {
		const datesInRange = getDatesBetween(guest.startDate, guest.endDate)
		datesInRange.forEach(dateObj => {
			const existingDate = acc.find(
				existing => existing.date === dateObj.date,
			)
			if (existingDate) {
				existingDate.names.push(guest.name)
			} else {
				acc.push({ ...dateObj, names: [guest.name] })
			}
		})

		acc = acc.sort((a, b) => {
			const aDate = new Date(a.date)
			const bDate = new Date(b.date)
			return bDate.getTime() - aDate.getTime()
		})

		return acc
	}, [] as DateWithName[])

	//duplikált dátumok törlése
	const uniqueDates = Array.from(new Set(allDates))

	return (
		<div className='layout-column align-items-center justify-content-center'>
			<section className='content layout-row align-items-center justify-content-center mt-50'>
				<table className='card content'>
					<thead>
						<tr>
							<th>Date</th>
							<th>Breakfast</th>
							<th>Lunch</th>
							<th>Dinner</th>
						</tr>
					</thead>
					<tbody data-test-id='meal-schedule'>
						{uniqueDates.map((guest, index) => (
							<tr key={index}>
								<td data-test-id='date'>{guest.date}</td>
								{['breakfast', 'lunch', 'dinner'].map(
									(meal, mealIndex) => (
										<td key={mealIndex}>
											<ul data-test-id={`${meal}-list`}>
												{guest.names.map(
													(name, nIndex) => (
														<li key={nIndex}>
															{name}
														</li>
													),
												)}
											</ul>
										</td>
									),
								)}
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	)
}

export default MealSchedule
