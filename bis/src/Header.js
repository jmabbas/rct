import React from 'react'

const Header = ({title}) => {
  return (
    <div>{title}</div>
  )
}

Header.defaultProps = {
    title : "testghdf"
}
export default Header