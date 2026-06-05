import React,{useState,useEffect} from 'react'
import {BsGenderFemale,BsGenderMale} from 'react-icons/bs'

import './Card.css'

const Card = ({data,getDataApi}) =>{
    const [episodeData, setEpisodeData] = useState(null)
    const [locationData, setLocationData] = useState(null)

    useEffect(()=>{
       /* getDataApi(data.episode[0]).then(data =>{
            setEpisodeData(data)
        })
        getDataApi(data.location.url).then(data =>{
            setLocationData(data)
        })*/
    },[])
    
     return(
        <div className='card'>
            <div className='card-image' style={{backgroundImage: `url(${data.image})`}}></div>
            <div className='card-info'>
                <div>
                    <h2>{data.name}</h2>   
                    <div className='card-info__status'><div className={`indicator ${data.status}`}></div><span>{data.status} - {data.species}</span></div>
                </div>
                <div>
                    <p className='subtitle'>Last known location:</p>
                    <p>{data.location.name}</p>
                </div>
                <div>
                    <p className='subtitle'>First seen in:</p>
                    <p>{episodeData ? (episodeData.name) : 'No Information' }</p>
                </div>
            </div>
            <div className='card-tooltip'>
                <div className='card-tooltip__info'>
                    <div className='same-line'>
                        <h2>{data.name}</h2><div>{data.gender === 'Female'? (<BsGenderFemale />): (<BsGenderMale/>)}</div>
                    </div>
                    <div>
                        <p><strong>Origin:</strong></p>
                        <p>{data.location.name} - {locationData ? (locationData.type) : 'No Information'}</p>
                        <small><i><strong>Dimension: </strong>{locationData ? (locationData.dimension): 'No Information' }</i></small>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
     )
}

export default Card