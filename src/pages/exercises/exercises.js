import React, { useState, useEffect, useCallback } from 'react'

import { useParams } from '@reach/router'
import Nav from '../../components/organisms/nav/nav'
import ExerciseList from '../../components/organisms/exerciseList/exerciseList'

const Exercises = () => {

    const params = useParams()
    const _category = params.category

    const [exercises, setExercises] = useState([])

    const fetching =  useCallback(
      _category === 'All' ?
        async () => {
            try {
              const response = await fetch("/api/exercises")
              const data = await response.json()
              setExercises(data.exercises)
            } catch (error) {
                console.log(error)
            }
        }
        :
        async () => {
          try {
            const response = await fetch(`/api/exercises/${_category}`)
            const data = await response.json()
            setExercises(data.category)
          } catch (error) {
              console.log(error)
          }
      }
      ,
      [],
    )
  
    useEffect(() => {
      fetching()
    }, [fetching])

    return (
        <div>
          <h3>
            {_category}
          </h3>
          <ExerciseList exercises={exercises} />
          <Nav />
        </div>
    )
}

export default Exercises
