import React from 'react'

import { Link } from '@reach/router'

const CategoryLink = ({category}) => {
    return (
        <Link className="categoryLink" to={`/project06/${category}/exercises`}>
            {category}
        </Link>
    )
}

export default CategoryLink
