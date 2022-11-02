import React from 'react'
import './Col.css'

const COL_CLASS_NAME = {
	'large': 'app__col--large',
	'medium': 'app__col--medium'
}

function Col (props) {
	const { children, size = 'medium' } = props
	const className = COL_CLASS_NAME[size]

	return (
		<div className={`app__col ${className}`}>
			{children}
		</div>
	)
}

export default Col