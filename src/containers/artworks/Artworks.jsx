import React, {useEffect, useState} from 'react';
import './artworks.css';

import download  from '../../assets/images/download.png';

import { GalleryData } from './GalleryData';

const Artworks = () => {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item)=> item.category))])
  },[])

console.log(data);

const Gallery_filter = (itemData) =>{
  const filterData = GalleryData.filter((item)=> item.category === itemData);
  setData(filterData);
}

const allItems =()=> {
  const finalData = GalleryData.filter((item)=> {
    return item;
  })
  setData(finalData)
}


    return (
      <div classNameName="artworks section__padding">
        <div class="col-12 mainfilterbox">
              <ul class="filter-bttns">
                  <li class="active bttns" onClick={allItems}>Trending</li>
                  {
                    collection.map((item)=> <li class="bttns" onClick={()=>{Gallery_filter(item)}}>{item}</li>)
                  }
              </ul>
        </div>         
        
        <div className='galleryWrapper'>

          <div className='galleryContainer'>
            { data.map((item)=> {
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