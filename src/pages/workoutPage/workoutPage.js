import React from 'react'

import { Link } from '@reach/router'



import Nav from '../../components/organisms/nav/nav'
import Exercise from '../../components/organisms/exercise/exercise'
import Add from '../../components/atoms/add/add'



const WorkoutPage = ({workout, setWorkout, history, setHistory}) => {

    const endWorkout = () => {
        workout.lenght === 0 ?
            console.log()
            :
            setHistory([...history, workout])
        setWorkout([])
    }

    return (
        <div>
            <Link to="/project06/workout/add">
                <Add />
            </Link>
            <div>
                {
                    workout.map((exercise,index)=>(
                        <Exercise key={exercise._id} exercise={exercise} to={`/project06/workout/${index}`} />
                    ))
                }
            </div>
            <button onClick={endWorkout}>End workout</button>
            <Nav />            
        </div>
    )
}

export default WorkoutPage
