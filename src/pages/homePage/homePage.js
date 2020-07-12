import React from 'react'

import Nav from '../../components/organisms/nav/nav'

import './home.scss'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="content">
                <article>
                    <p>
                        App was created in Create-React-App.
                        In this React App I used Api, Sass, Mirage JS.
                        Routing was created in Reach Router.
                        Icons in site is from FontAwesome.
                        Colors in the page you can find on <i>https://flatuicolors.com</i>.
                    </p>
                </article>
                <article>
                    <h3>About site</h3>
                    <p>
                        In this page you can create workout and save your results. 
                        ALso you can find out which excercise you can do in the gym.
                        What is the exercise category and what equipment will you use for the exercise.
                    </p>
                </article>
            </div>
            <Nav />            
        </div>
    )
}

export default HomePage
