import React from 'react'
import './Title.css'

function Title(props) {
	const { title = 'title' } = props;
	return (
		<div className="app__title">
				<h2 className="app__title__content">{title}</h2>
		</div>
	)
}

export default Title
