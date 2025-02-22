import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const itemLists = ({handleChange,handleDelet,item}) => {
  return (
    <li>
        <input type="checkbox" onChange={()=>handleChange(item.id)} checked={item.checked}/>
        <label>{item.item}</label>
        <FaTrashAlt role="button" onClick={()=> handleDelet(item.id)} tabIndex="0"/>
    </li>
  )
}

export default itemLists