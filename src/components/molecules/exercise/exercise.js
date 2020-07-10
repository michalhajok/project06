import React from 'react'

import './exercise.scss'

const Exercise = ({exercise}) => {

    const {picture_url, title, partMain, equipment} = exercise

    return (
            <div className="exercise">
                <figure>
                    <img src={picture_url} alt="foto" />
                </figure>
                <article>
                    <p>{title}</p>
                    <p><b>Category:</b> {partMain}</p>
                    <p><b>Equipment: </b>{equipment}</p>
                </article>
            </div>
    )
}

export default Exercise
