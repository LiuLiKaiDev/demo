import React from 'react'
import './Item.css'

function Item (props) {
    const { title, description } = props;

    return (
        <div className="app__card__item" title={title}>
            <div className="app__card__item__title">
                {title}
            </div>
            <div className="app__card__item__description" title={description}>
                {description}
            </div>
        </div>
    )
}

export default Item