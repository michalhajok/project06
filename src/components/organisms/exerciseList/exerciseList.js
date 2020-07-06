import React from 'react'

const ExerciseList = ({exercises}) => {
    return (
        <div>
        {
            exercises.map(({_id, title}) =>(
            <div key={_id}>
                {title}
            </div>
            ))
        }
        </div>
    )
}

export default ExerciseList
