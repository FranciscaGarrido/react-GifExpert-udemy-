export const getGifts = async(category) => {
    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=v2XZhVWuZoV8m42C4iUKn0xX93VzVJBI&q=${category}&limit=10`;
    const resp = await fetch(urlAPI);
    const {data} = await resp.json();

    const gifts = data.map( img => ({
        id : img.id,
        title : img.title,
        url: img.images.downsized_medium.url
    }))

    
    return gifts;
}