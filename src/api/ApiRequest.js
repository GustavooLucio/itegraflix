export async function ApiRequest(url){
     const API_URL = url
    
    return (await fetch(API_URL)).json()
}
