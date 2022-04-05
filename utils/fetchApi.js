import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export async function fetchApi (url){
    const { data } = await axios.get((url), {
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b628909c50msh75f89a18c663638p1fd8fajsn8b1a402f00f1'
        },
    });

    return data
    
}

