import React from 'react'
import Icon from '../../common/Icon'
import call from './assets/call.png'
import mobile from './assets/mobile.png'
import video from './assets/video.png'
import './Contact.css'

function Contact() {
	return (
		<div className="app__card__contact">
			<Icon url={call} />
			<Icon url={mobile} />
			<Icon url={video} />
		</div>
	)
}

export default Contact