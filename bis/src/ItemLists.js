import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const itemLists = ({handleChange,handleDelet,item}) => {
  return (
    <li className="item">
            <input
                type="checkbox"
                onChange={() => handleChange(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleChange(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelet(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default itemLists