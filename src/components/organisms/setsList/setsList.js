import React from 'react'


import Sets from '../../molecules/sets'

const SetsList = ({sets, updateSet}) => {
    return (
        <div>
            {
                sets.map(({weight, quantity}, index) =>(
                    <Sets key={`set ${index}`} updateSet={updateSet} index={index} weight={weight} quantity={quantity} />
                ))
            }
        </div>
    )
}

export default SetsList
