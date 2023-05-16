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
      <ul className="navigation">
        <li><a href="#">Home</a></li>
        <li><a className="active" href="#">Movies</a></li>
        <li><a href="#">Theaters</a></li>
        <li><a href="#">News</a></li>
        <Link to='/form'> Form
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
