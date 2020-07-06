import React from 'react'

import { Link } from '@reach/router'

const CategoryList = ({categories}) => {
    return (
        <div>
            {
                categories.map(category =>(
                    <Link key={category} to={`/project06/${category}/exercises`}>
                        {category}
                    </Link>
                ))
            }
        </div>
    )
}

export default CategoryList
