import React,{useState,useEffect} from 'react'
import './Dashboard.css'

import Card from '../features/Card'
import {getListCharacter} from '../../api/api'

export default function Dashboard(){
    const [isLoading, setIsLoading] = useState(false)
    const [info, setInfo] = useState(null)
    const [data, setData] = useState(null)

    useEffect(()=>{
        requestCharacters('https://rickandmortyapi.com/api/character')
    },[])

    useEffect(()=>{
        if(info){
            requestCharacters(info.next, true);
        }
    }, [isLoading])

    async function requestCharacters(route,add){
        const characters = await getListCharacter(route)
        if(add){
            setTimeout(()=>{
                const lastCharacters = [...data]
                characters.results.map((character) => (
                    lastCharacters.push(character)
                ))
                setData(lastCharacters)
                setInfo(characters.info)
                setIsLoading(false)  
            }, 2000)
        }else{
            setData(characters.results)
            setInfo(characters.info)
        }
        return true
    }


    document.addEventListener('scroll', (event)=>{
        const container = document.getElementById('characters');
        const tope = (container.offsetHeight - container.offsetTop)
        if(!isLoading){
            if(tope < document.documentElement.scrollTop ){
                console.log('here')
                setIsLoading(true)   
            }
        }
    })

        return(
            <section>
                <div className='characters' id='characters'>
                {
                data ? (data.map((character) => (
                   <Card key={character.id}
                   data={character}
                   getDataApi={character}/> 
                ))) : (<div className="loader"></div>)
                }
                </div>
                {isLoading ? (<div className="loader"></div>): (null)}
                 
            </section>
           
        )

    
}

