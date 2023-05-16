import React, { useState } from 'react'
import Sidebar from './Sidebar';
import menu from '../assets/css/images/the way.jpg'
import menu1 from '../assets/css/images/Spidy.jpg'
import menu2 from '../assets/css/images/aqua.jpg'
import movie1 from '../assets/css/images/movie1.jpg'
import movie2 from '../assets/css/images/movie2.jpg'
import movie3 from '../assets/css/images/movie3.jpg'
import { Link } from 'react-router-dom';


const Main = () => {

  const [isActive , setIsActive] = useState('active')


  return (
    <section className="main-container">
 <div>
    <Sidebar />
 </div>
    <div className="movie_container">
      <div className="upcoming-img-box">
        <img src={menu} alt="" className='mx-3 mt-3' />
       {/* <div id="carouselExampleIndicators" className="carousel slide upcoming-img-box " data-ride="carousel">
        <div className="carousel-inner h-100">
          <div className ={`carousel-item h-100 ${isActive}`} >
            <img className="d-block w-100" src="https://w0.peakpx.com/wallpaper/593/742/HD-wallpaper-avatar-2-the-way-of-water-banner.jpg" alt="First slide" />
          </div>
          <div className={`carousel-item h-100 ${isActive}`} >
            <img className="d-block w-100" src="https://www.disneyalwayswithus.com/wp-content/uploads/2017/06/spiderman_homecoming_ver7_xlg-2.jpg" alt="Second slide" />
          </div>
          <div className={`carousel-item h-100 ${isActive}`}>
            <img className="d-block w-100" src="https://cdn.europosters.eu/image/hp/55417.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only"  onClick={()=> setIsActive}>Next</span>
        </a>
      </div> */}
        <p className="upcoming-title">Upcoming Movie</p>
        <div className="buttons">
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
