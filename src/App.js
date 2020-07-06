import React, { useState } from 'react';
import './App.scss';

import { Router } from '@reach/router'

import HomePage from './pages/homePage'
import CategoriesMenu from './pages/categoriesMenu';
import Exercises from './pages/exercises/exercises';
import WorkoutPage from './pages/workoutPage/workoutPage';
import ExerecisePage from './pages/exercisePage/exerecisePage';
import AddExercisePage from './pages/addExercisePage'

function App() {

  const categories = ["All" ,"Chest", "Back", "Shoulder", "Biceps", "Triceps", "Core", "Glutes", "Upper legs", "Calves"]

  const [workout, setWorkout] = useState([])
  const [history, setHistory] = useState([])

  return (
    <div className="App">
      <Router>
        <HomePage path="/project06/" />
        <CategoriesMenu path="/project06/categories" categories={categories} />
        <Exercises path="/project06/:category/exercises" />
        <WorkoutPage path="/project06/workout" workout={workout} setWorkout={setWorkout} history={history} setHistory={setHistory} />
        <ExerecisePage path="/project06/workout/:id" workout={workout} setWorkout={setWorkout} />
        <AddExercisePage path="/project06/workout/add" workout={workout} categories={categories} setWorkout={setWorkout} />
      </Router>
    </div>
  );
}

export default App;
