import React from 'react'

import AddExercise from '../../components/molecules/addExercise/addExercise'

    export function filter({category, exercises, workout, setWorkout}){
        const add = (e) => {
          workout.length === 0 ?
            setWorkout([...workout, {...e, sets:[{weight:0,quantity:0}]}])
            :
            workout.filter(exercise => exercise._id === e._id).length === 0 ?
              setWorkout([...workout, {...e, sets:[{weight:0,quantity:0}]}])
              :
              console.log()
          }
          
          const filters = () => (
            exercises
            .filter(({partMain}) => partMain === category)
            .map(
              filtered =>(
                <AddExercise key={filtered._id} exercise={filtered} add={add} />
              )))

            switch (category) {
              case "All":
                return (
                  exercises.map(exercise=>(
                    <AddExercise key={exercise._id} exercise={exercise} add={add} />
                  ))
                )
              case "Chest":
                return filters()
              case "Back":
                return filters()
              case "Shoulder":
                return filters()
              case "Biceps":
                return filters()
              case "Triceps":
                return filters()
              case "Core":
                return filters()
              case "Upper leg":
                return filters()
              case "Glutes":
                return filters()
              case "Calves":
                return filters()
              default:
                break;
            
        }
    } 
  
  