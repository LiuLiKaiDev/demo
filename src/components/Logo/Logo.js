import React from 'react'
import './Logo.css'
import logo from './logo.png'

function Logo() {
	return (
		<div className="app__logo">
			<img className="app__logo__img" src={logo} />
		</div>
	)
}

export default Logo