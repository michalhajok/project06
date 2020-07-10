import React from 'react'

import Exercise from '../../molecules/exercise'

import './exerciseList.scss'

const ExerciseList = ({exercises}) => {
    return (
        <div className="exerciseList">
        {
            exercises.map(exercise =>(
                <Exercise key={exercise._id} exercise={exercise} />
            ))
        }
        </div>
    )
}

export default ExerciseList
