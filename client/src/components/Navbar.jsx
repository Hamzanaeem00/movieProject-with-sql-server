import React from 'react'
import { AiOutlineMenu, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiDotsVertical } from "react-icons/bi";
import Profile  from '../assets/css/images/profile.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <selection className="top-bar">
    <div className="left-content">
      <h2 className="title">Movie Light</h2>
      <ul className="navigation my-2">
        <Link className='link mx-2' to='/'> Home </Link>
        <Link className="active mx-2" to='/'>Movies</Link>
        <Link  className='link mx-2'>Theaters</Link>
        <Link  className='link mx-2'>News</Link>
        <Link className='link mx-2' to='/form'> Form
        </Link>
      </ul>
    </div>
    <div className="right-content">
      <div className='mx-2' >
      <AiOutlineMenu size="1.6rem" color='white' />
      </div>
      <div className='mx-2'>
      <BsFillCartCheckFill size="1.6rem" color='white' />
      </div>
      <div className='mx-2'>
      <AiFillQuestionCircle  size="1.6rem" color='white' />
      </div>

      <div className="profile-img-box mx-2">
        <img src={Profile}alt="" width='40px' height='40px' />
      </div>
      <div className='mx-2'>
      <BiDotsVertical size="1.6rem" color='white' />
      </div>
  
    </div>
  </selection>
  )
}

export default Navbar
