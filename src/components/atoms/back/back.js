import React from 'react'

import './back.scss'

const Back = () => {
    return (
        <div className="btn--back" onClick={()=>window.history.back()}>
            Back
        </div>
    )
}

export default Back
