
export const exerciseOptions = {
    method : 'GET',
    headers: {
        'X-RapidAPI-Key': 'b5e632e026msh574312133404c9cp140f97jsn4e7061ea7578',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

export const FetchData = async (url, options) => 
{
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}