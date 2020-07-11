import React, { memo } from 'react'

import { useParams } from '@reach/router'

import Nav from '../../components/organisms/nav/nav'
import Back from '../../components/atoms/back/back'

import './exercisePage.scss'
import SetsList from '../../components/organisms/setsList/setsList'

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
        <div className="exercisePage">
            <div className="exercisePage--bar">
                <Back />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <SetsList sets={sets} updateSet={updateSet} />
                <button onClick={addSet}>Add set</button>
            </div>
            <Nav />
        </div>
    )
}

export default memo(ExerecisePage)
