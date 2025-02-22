import React from 'react'
import LineItems from './IineItems'

const Content = ({handleChange,handleDelet,items}) => {

  return (
    <main>
        {(items.length) ? (
         <LineItems handleChange={handleChange} 
         handleDelet={handleDelet} 
         items={items}
         />
        ): 
        <p>your list is empty</p>} 
    </main>
  )
}

export default Content