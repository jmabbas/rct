import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'

const Header = ({title, width}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      {width< 788 ? <FaMobileAlt/>: width < 1200?<FaTabletAlt /> : <FaLaptop />}
    </header>
  )
}

export default Header