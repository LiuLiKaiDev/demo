import React from 'react'
import Item from './Item'
import './ItemGroup.css'

function ItemGroup(props) {
	const { size = 'large' } = props

	if(size === 'medium') {
		return (
			<>
				<div className="app__card__grid grid-2">
					<Item title="Company" description="Austin Capital Trust" />
					<Item title="Number" description="+12673800457" />
				</div>
				<div className="app__card__grid grid-1">
					<Item title="Adress" description="15 W.Saxton Lane Brooklyn, NY 11218" />
				</div>
			</>
		)
	}
	return (
		<div className="app__card__grid grid-3">
			<Item title="Company" description="Austin Capital Trust" />
			<Item title="Number" description="+12673800457" />
			<Item title="Adress" description="15 W.Saxton Lane Brooklyn, NY 11218" />
		</div>
	)
}

export default ItemGroup