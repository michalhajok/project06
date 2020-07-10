import React from 'react'

import { Link } from '@reach/router'

import Exercise from '../../molecules/exercise'

const WorkoutExerciseList = ({workout}) => {
    return (
        <div className="workoutPage--list">
            {
                workout.map((exercise,index)=>(
                    <Link key={exercise._id} to={`/project06/workout/${index}`}>
                        <Exercise exercise={exercise} />
                    </Link>
                ))
            }
        </div>
    )
}

export default WorkoutExerciseList
