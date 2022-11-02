import React, { useState } from 'react'
import './Collaspe.css'

function Collaspe (props) {
    const { title, extra, children } = props
    const [expand, setExpand] = useState(true)
    const toggle = () => {
        setExpand(!expand)
    }

    const titleExpandClassName = expand ? '' : 'app__collaspe__title--close'
    const contentExpandClassName = expand ? '' : 'app__collaspe__content--close'

    return (
        <div className='app__collaspe'>
            <div className="app__collaspe__header">
                <div className={`app__collaspe__title ${titleExpandClassName}`} onClick={toggle}>
                    <span>{title}</span>
                </div>
                {extra ? <div className="app__collaspe__extra">{extra}</div> : null}
            </div>
            <div className={`app__collaspe__content ${contentExpandClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default Collaspe