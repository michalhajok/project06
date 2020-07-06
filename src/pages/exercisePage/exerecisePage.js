import React from 'react'

import { Link, useParams } from '@reach/router'

import Nav from '../../components/organisms/nav/nav'
import Sets from '../../components/molecules/sets/sets'

const ExerecisePage = ({workout, setWorkout}) => {
    
    const params = useParams()

    const id = params.id

    const {title, sets} = workout[id]

    const updateSet = (e,index) =>{
        let array = workout
        let arraysets = sets
        
        e.target.value < 0 ?
            console.log()
           :
           arraysets[index] = {
            ...arraysets[index],
            [e.target.name]: e.target.value
        }

        array[id] = {
            ...workout[id],
            arraysets
        }

        setWorkout([...array])
        
    }

    const addSet = () => {
        let array = workout
        array[id] = {
            ...workout[id],
            sets:[
                ...sets,
                {
                    quantity:0,
                    weight:0        
                }
            ]
        }
        setWorkout([...array])
    }

    return (
        <div>
            <Link to="/project06/workout">Go back</Link>
            {title}
            <div>
                <div>
                    {
                        sets.map(({weight, quantity}, index) =>(
                            <Sets key={`set ${index}`} updateSet={updateSet} index={index} weight={weight} quantity={quantity} />
                        ))
                    }
                </div>
                <p onClick={addSet}>Add set</p>
            </div>
            <Nav />
        </div>
    )
}

export default ExerecisePage
