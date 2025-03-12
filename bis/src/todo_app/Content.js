import React from 'react'
import LineItems from './IineItems'

const Content = ({handleChange,handleDelet,items}) => {

  return (
    <>
        {(items.length) ? (
         <LineItems handleChange={handleChange} 
         handleDelet={handleDelet} 
         items={items}
         />
        ): 
        <p>your list is empty</p>} 
    </>
  )
}

export default Content