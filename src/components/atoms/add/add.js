import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

const Add = ({size}) => {
    return (
            <FontAwesomeIcon className="add--font" size={`${size}x`} icon={faPlus} />     
    )
}

export default Add
