import React from 'react'

import { Link } from '@reach/router'

import Nav from '../../components/organisms/nav/nav'
import Add from '../../components/atoms/add/add'
import WorkoutExerciseList from '../../components/organisms/workoutExerciseList/workoutExerciseList'

import './workoutPage.scss'

const WorkoutPage = ({workout, setWorkout, history, setHistory}) => {

    let isDisabled = workout.length === 0 ? true : false

    let classname = workout.length === 0 ? "inactive--btn" : "active--btn"

    const endWorkout = () => {
        workout.length === 0 ?
            console.log()
            :
            setHistory([...history, workout])
        setWorkout([])
    }

    return (
        <div className="workoutPage">
            <div className="workoutPage--bar">
                <Link to="/project06/workout/add">
                    <p>Add exercise <Add size="1" /></p>
                </Link>
                <button className={classname} onClick={endWorkout} disabled={isDisabled}>End workout</button>
            </div>
            <WorkoutExerciseList workout={workout} />
            <Nav />            
        </div>
    )
}

export default WorkoutPage
