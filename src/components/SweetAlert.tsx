import Swal, { SweetAlertIcon } from 'sweetalert2'

export const sweetAlert = (
	title: string,
	text: any,
	icon: SweetAlertIcon,
): Promise<any> => {
	return Swal.fire(title, text, icon)
}
