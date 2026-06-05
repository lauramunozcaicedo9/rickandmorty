export async function getListCharacter(route){
    try{
        const response = await fetch(route)
        if(response.ok){
            return await response.json()
        }else{
            console.log('Something weird is happening')
        }
    }catch(err){
        console.log('OMG, terrible Error!:', err.message)
    }      
}

