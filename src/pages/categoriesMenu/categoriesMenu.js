import React from 'react'

import Nav from '../../components/organisms/nav/nav'
import CategoryList from '../../components/organisms/categoryList/categoryList'

import './categoriesMenu.scss'

const CategoriesMenu = ({categories}) => {
    return (
        <div className="categoriesMenu">
            <CategoryList categories={categories} />
            <Nav />             
        </div>
    )
}

export default CategoriesMenu
