import React from 'react'
import './Tag.css'

function Tag (props) {

    const { status = 'available' } = props

    if(status !== 'available') {
        return <span className="app__tag app__tag--invaliable">Not Available</span>
    }

    return (
        <span className="app__tag app__tag--avaliable">Available</span>
    )

}

export default Tag