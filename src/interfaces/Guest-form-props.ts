import { Guest } from './Guest'

export interface GuestFormProps {
	guests: Guest[]
	setGuests: React.Dispatch<React.SetStateAction<Guest[]>>
}
