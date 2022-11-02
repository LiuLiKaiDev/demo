import React from 'react'
import './Icon.css'

function Icon (props) {
    const { status = 'available', url, invailableUrl } = props
    const src = status === 'available' ? url : invailableUrl

    return (
        <div className="app__icon">
            <img src={src} alt="" />
        </div>
    )
}

export default Icon