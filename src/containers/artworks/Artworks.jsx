import React from 'react';

import './artworks.css';

import download  from '../../assets/images/download.png';

import { GalleryData } from './GalleryData';



const Artworks = (props) => {

  //search filter new array
  const searchData = GalleryData.filter((el) => {
    if (props.input === '') {
      return el;
    }
    else {
      return el.description.toString().toLowerCase().includes(props.input.toLowerCase())
    }
  })



    return (
      <div classNameName="artworks section__padding">
                
        <div className='galleryWrapper'>

          <div className='galleryContainer'>
            { 
              searchData.map((item, key)=> {
                return (
                
                  <div className="galleryItem">
                        <img src={item.image} key={item.id} className="img-fluid" alt="artwork"/>
                          <div className='des'>
                            <span>{item.price}</span>
                              <a href='#home'>
                              <img className='download' src={download} alt=""/>
                              </a>
                            <a href="#home" className='description'>{item.description}</a>
                      </div>
                  </div>
              );
            })
            }
            </div>
        </div>

      </div>
    );
  
  }
  
  export default Artworks;