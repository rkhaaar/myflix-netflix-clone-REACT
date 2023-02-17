const API_KEY= 'c06f55f3688199cba9f4888fe179eb76';
const API_BASE= 'https://api.themoviedb.org/3/';


/*
-originais netflix
-recomendados(trending)
-em alta(top rated)
-acção 
-comedia
-terror
-romance
-documetarios
*/

const basicFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = await request.json();
  return json;
}

export default {
getHomeList: async ()=>{
  return [
    {
      slug:'originals',
      title:'Netflix Originals',
      items: await basicFetch(`discover/tv?with_network=213&language=en-GB&sort_by=popularity.desc&timezone=London&api_key=${API_KEY}`)
    },
    {
      slug:'trending',
      title:'Trending',
      items: await basicFetch(`trending/all/week?language=en-GB&api_key=${API_KEY}`)
    },
    {
      slug:'toprated',
      title:'Top Rated',
      items: await basicFetch(`movie/top_rated?language=en-GB&api_key=${API_KEY}`)
    },
    {
      slug:'action',
      title:'Action',
      items: await basicFetch(`/discover/movie?with_genres=28&language=en-GB&api_key=${API_KEY}`)
    },
    {
      slug:'comedy',
      title:'Comedy',
      items:  await basicFetch(`/discover/movie?with_genres=35&language=en-GB&api_key=${API_KEY}`)
    },
    {
      slug:'horror',
      title:'Horror',
      items:  await basicFetch(`/discover/movie?with_genres=27&language=en-GB&api_key=${API_KEY}`)
    },
    {
      slug:'romance',
      title:'Romance',
      items: await basicFetch(`/discover/movie?with_genres=10749&language=en-GB&api_key=${API_KEY}`)
    },
    {
      slug:'documentary',
      title:'Documentary',
      items:  await basicFetch(`/discover/movie?with_genres=99&language=en-GB&api_key=${API_KEY}`)
    }
  ];
},getMovieInfo : async (movieId, type)=>{
  let info = {};
  if(movieId){
    switch(type){
      case 'movie':
        return info = await basicFetch(`/movie/${movieId}?language=en-GB&api_key=${API_KEY}`);
        break;
        case 'tv':
          return info = await basicFetch(`/tv/${movieId}?language=en-GB&api_key=${API_KEY}`);
          break;
          default:
            return info = null;
            break;
         
    }
  }
}


}