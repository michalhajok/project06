import React from 'react'

import Add from '../../atoms/add/add'
import Exercise from '../exercise'

const AddExercise = ({exercise, add}) => {
    return (
        <div className="addPage--exercise" onClick={()=>add(exercise)}>
            <Exercise exercise={exercise} />
            <Add size="2" />
        </div>
    )
}

export default AddExercise
