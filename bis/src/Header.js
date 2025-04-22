import { useContext } from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import DataContext from './context/DataContext'

const Header = ({title}) => {

  const {width} = useContext(DataContext)
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      {width< 788 ? <FaMobileAlt/>: width < 1200?<FaTabletAlt /> : <FaLaptop />}
    </header>
  )
}

export default Header