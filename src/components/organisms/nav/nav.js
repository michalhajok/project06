import React from 'react'

import { Link } from '@reach/router'

import './nav.scss'

const Nav = () => {
    return (
        <nav>
           <ul>
                <li>
                    <Link to="/project06/">Home</Link>
                </li>
                <li>
                    <Link to="/project06/categories/">Exercises</Link>
                </li>
                <li>
                    <Link to="/project06/workout">Workout</Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Nav
