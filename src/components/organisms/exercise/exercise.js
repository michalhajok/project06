import React from 'react'

import { Link } from '@reach/router'

const Exercise = ({exercise, to}) => {

    const {picture_url, title, partMain, equipment} = exercise

    return (
        <Link  to={to}>
            <div>
                <figure>
                    <img src={picture_url} alt="foto" />
                </figure>
                <article>
                    <p>{title}</p>
                    <p>{partMain}</p>
                    <p>{equipment}</p>
                </article>
            </div>
        </Link>
    )
}

export default Exercise
