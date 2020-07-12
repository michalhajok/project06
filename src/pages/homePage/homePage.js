import React from 'react'

import Nav from '../../components/organisms/nav/nav'

import './home.scss'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="content">
                <article>
                    <p>
                    Application was created with Create-React-App,
                     with usage of Api, Sass, Mirage JS.
                      Routing was created with Reach Router.
                       All icons used are from Font Awesome.
                     Colors used in the page can be found at  <i>https://flatuicolors.com</i>.
                    </p>
                </article>
                <article>
                    <h3>About site</h3>
                    <p>
                        In this page you can create your own workout plan and save your results. 
                        Also, you can find out which exercise you can do at the gym.
                        And what equipment you will need to do the selected exercises.
                    </p>
                </article>
            </div>
            <Nav />            
        </div>
    )
}

export default HomePage
