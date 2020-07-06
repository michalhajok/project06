import React from 'react'

import Nav from '../../components/organisms/nav/nav'
import CategoryList from '../../components/organisms/categoryList/categoryList'

const CategoriesMenu = ({categories}) => {
    return (
        <div>
            <CategoryList categories={categories} />
            <Nav />             
        </div>
    )
}

export default CategoriesMenu
