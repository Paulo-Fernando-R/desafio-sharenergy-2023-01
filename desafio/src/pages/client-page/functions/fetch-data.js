async function fetchData (){
    ///setLoading(true)
    try{
        const options = {method: 'GET'};
        const response = await fetch('http://localhost:3333/clients');
        const json = await response.json();
        return json;
    }
    catch (e){
        return [];
    }

}

export default fetchData;