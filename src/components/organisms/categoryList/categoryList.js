import React from 'react'

import CategoryLink from '../../molecules/categoryLink'

import './categoryList.scss'

const CategoryList = ({categories}) => {
    return (
        <div className="categoryList">
            {
                categories.map(category =>(
                    <CategoryLink key={category} category={category} />
                ))
            }
        </div>
    )
}

export default CategoryList
