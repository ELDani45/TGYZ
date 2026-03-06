import { FaPuzzlePiece } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { HiFlag } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom'
import './NavStyle.css'


export function NavSide({isOpen, setIsOpen}) {
    const toggleMenu = () => setIsOpen(!isOpen)
    
    const optionStyle = isOpen ? 'nav-open':'nav-closed'
    const text = isOpen? 'TGYZ.com':'TGYZ'
  return (
    <div onClick={toggleMenu} className={optionStyle}>
        <h2 className={`logo ${isOpen? 'no-siglas':'siglas'}`}>{text}</h2>

        <ul onClick={(e) => e.stopPropagation()}>
            <div className='box-link'>
              <Link className={`${isOpen? 'link-navegation':'link-navegation-small'}`} to={'/'} >
              <div className="nav-item-content">
                <GoHome className="nav-icon" />
                <span className="nav-label">Inicio</span>
              </div>
              </Link>
            </div>
            <div className='box-link'>
              <Link className={`${isOpen? 'link-navegation':'link-navegation-small'}`} to={'/'} >
              <div className="nav-item-content">
                <HiFlag className="nav-icon" />    
                <span className="nav-label">Nosotros</span>
              </div>
              </Link>
            </div>
            <div className='box-link'>
              <Link className={`${isOpen? 'link-navegation':'link-navegation-small'}`} to={'/'} >
              <div className="nav-item-content">
                <FaPuzzlePiece  className="nav-icon" />
                <span className="nav-label">Ejercisios</span>
              </div>
              </Link>
            </div>
        </ul>
    </div>
  )}

