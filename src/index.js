import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import exercises from './database'

import { Server } from "miragejs"

new Server({
  routes() {
    this.namespace = "api"

    this.get("/exercises", () => {
      return {
        exercises: exercises
      }
    })

    this.get("/exercises/:category", (schema,request) => {
      return { 
        category: exercises.filter(exercise => exercise.partMain === request.params.category)
    }}
    )
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

