import React from 'react'
import ItemLists from './ItemLists';

const lineItems = ({handleChange,handleDelet,items}) => {
  return (
    <ul>
        {items.map((item)=>(
            <ItemLists 
            handleChange={handleChange} 
            key = {item.id}
            handleDelet={handleDelet} 
            item={item}
            />
        ))}
    </ul>
  )
}

export default lineItems