import React from 'react'

const Sets = ({ index, weight, quantity, updateSet}) => {
    return (
        <div className="set">
            <p>
                <b>Set {index + 1}</b>
            </p>
            <label>
                Weight: 
                <input 
                value={weight} type="number" 
                name="weight"
                onChange={(e)=>{updateSet(e,index)}} />
            </label>
            <label>
                Quantity: 
                <input 
                    value={quantity} type="number"
                    name="quantity" 
                    onChange={(e)=>{updateSet(e,index)}} />
            </label>
        </div>
    )
}

export default Sets
