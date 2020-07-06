import React from 'react'

import Add from '../../atoms/add/add'

const AddExercise = ({exercise, add}) => {
    return (
        <div onClick={()=>add(exercise)}>
            <p>{exercise.title}</p>
            <p>{exercise.partMain}</p>
            <Add />
        </div>
    )
}

export default AddExercise
