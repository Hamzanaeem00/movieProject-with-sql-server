import React, { useState } from 'react'
import Sidebar from './Sidebar';
import menu from '../assets/css/images/the way.jpg'
import menu1 from '../assets/css/images/Spidy.jpg'
import menu2 from '../assets/css/images/aqua.jpg'
import movie1 from '../assets/css/images/movie1.jpg'
import movie2 from '../assets/css/images/movie2.jpg'
import movie3 from '../assets/css/images/movie3.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Main = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <section className="main-container">
 <div>
    <Sidebar />
 </div>
    <div className="movie_container">
      <div className="upcoming-img-box ">
        {/* <img src={menu} alt="" className='mx-3 mt-3' /> */}
        <Carousel className='h-100 my-2' activeIndex={index}
         onSelect={handleSelect}
         >
      <Carousel.Item className='my-0' >
          <img src={menu} alt=""  />
      </Carousel.Item>
      <Carousel.Item>
         <img src={menu1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
         <img src={menu2} alt="" />
s      </Carousel.Item>
    </Carousel>
        <p className="upcoming-title">Upcoming Movie</p>
        <div className="mx-4 position-relative" style={{top:'-92px'}} >
          <a className="btn">Book Now</a>
          <a className="btn-alt btn">Play Trailer</a>
        </div>
      </div>        
      <div className="current-movie">
        <div>
          <div className="cm-img-box">
            <img src={movie1} alt="" style={{width: '215px'}} />
          </div>
          <h3 className="movie-title text-center">Ant-man and the wasp quantumania</h3>
          <p className="screen-name text-center">Screen : Gold</p>
          <Link to ='/form'>
          <div className="booking">
            <h2 className="price">Rs:2000</h2>
            <a  className="btn">Buy Tickets </a>
          </div>
          </Link>
        </div>
        <div>
          <div className="cm-img-box">
            <img src={movie2} alt="" style={{width: '215px'}} />
          </div>
          <h3 className="movie-title text-center">Doctor Strange In The Multiverse </h3>
          <p className="screen-name text-center">Screen : Platinum</p>
          <Link to='/form'>
          <div className="booking">
            <h2 className="price">Rs:1500</h2>
            <a  className="btn">Buy Tickets </a>
          </div>
          </Link>
        </div>
        <div>
          <div className="cm-img-box">
            <img src={movie3} alt="" style={{width: '215px'}} />
          </div>
          <h3 className="movie-title text-center"> The Nun</h3><br />
          <p className="screen-name text-center">Screen : Silver</p>
          <Link to = '/form'>
          <div className="booking">
            <h2 className="price">Rs:2500</h2>
            <a  className="btn">Buy Tickets </a>
          </div>
          </Link>
        </div>
      </div>
    </div>
    
  </section>
);

  
}

export default Main
