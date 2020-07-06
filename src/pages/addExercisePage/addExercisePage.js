import React,{ useState, useEffect, useCallback }  from 'react'

import Nav from '../../components/organisms/nav/nav'

import { filter } from './filters'
import Category from '../../components/molecules/category/category'

const AddExercisePage = ({categories, workout, setWorkout}) => {

    const [category, setCategory] = useState("All")

    const [exercises, setExercises] = useState([])

    const fetching = useCallback(
      async () => {
          try {
            const response = await fetch('/api/exercises')
            const data = await response.json()
            setExercises(data.exercises)
          } catch (error) {
              console.log(error)
          }
      },
      [],
    )
  
    useEffect(() => {
      fetching()
    }, [fetching])

    return (
        <div>
            <div className="filterBar">
              {
                categories.map(category =>(
                  <Category  key={category} category={category} setCategory={setCategory}  />
                ))
              }
            </div>
            <div>{filter({category, exercises, workout, setWorkout})}</div>
            <Nav />
        </div>
    )
}

export default AddExercisePage
