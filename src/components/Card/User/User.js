import React from 'react'
import Tag from '../../common/Tag'
import avator from './assets/avator.png'
import './User.css'

function User(props) {
	const { status = 'available' } = props

	return (
		<div className="app__card__user">
			<div className="app__card__user__avator">
				<img src={avator} alt="avator" />
			</div>
			<div className="app__card__user__panel">
				<div className="app__card__user__info">
					<span className="app__card__user__name">Borislav</span>
					<Tag status={status} />
				</div>
				<div className="app__card__user__career">
					Inversment Management / Banker
				</div>
			</div>
		</div>
	)
}

export default User