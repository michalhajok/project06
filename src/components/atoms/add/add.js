import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

const Add = () => {
    return (
        <div>
            <p>Add</p>
            <FontAwesomeIcon icon={faPlus} />     
        </div>
    )
}

export default Add
