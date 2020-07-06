import React from 'react'

const Category = ({category, setCategory}) => {
    return (
        <div onClick={()=>{setCategory(category)}}>
            <p>{category}</p>
        </div>
    )
}

export default Category
