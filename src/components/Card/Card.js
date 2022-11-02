import React from 'react'
import User from './User'
import ItemGroup from './ItemGroup'
import Contact from './Contact'
import './Card.css'

function Card(props) {
	const { size = 'large' } = props
	const classStr = size === 'large' ? 'app__card--large' : ''

	return (
		<div className={`app__card ${classStr}`}>
			<User {...props} />
			<ItemGroup {...props} />
			<Contact />
		</div>
	)
}

export default Card