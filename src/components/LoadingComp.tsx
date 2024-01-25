import React from 'react'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

const LoadingComp: React.FC = () => {
	return (
		<div className='loading'>
			<section>
				<CgSpinnerTwoAlt className='loading-animation' />
				<span>Adatok betöltése</span>
			</section>
		</div>
	)
}

export default LoadingComp
