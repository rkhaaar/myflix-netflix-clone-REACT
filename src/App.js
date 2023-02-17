import React, {useEffect,useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default ()=>{
const[movieList,setMovieList] = useState([]);
const [featuredData, setFeaturedData]= useState(null);
const[blackHeader, setBlackHeader]= useState(false);

  useEffect(()=>{
    const loadAll= async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);   
      console.log(list);

      //getting featured 
      let netflixoriginals = list.filter(i=>i.slug==='originals');
      let randomDisplay = Math.floor(Math.random()*(netflixoriginals[0].items.results.length-1));
      let choice = netflixoriginals[0].items.results[randomDisplay];

      let choiceInfo = await Tmdb.getMovieInfo(choice.id, 'tv');
      setFeaturedData(choiceInfo);
      console.log(featuredData)
     }
    loadAll();
  },[])

  useEffect(()=>{
    const scrollListener =()=>{
      if(window.scrollY>10){
        setBlackHeader(true)
      }else{setBlackHeader(false)}
    }
    window.addEventListener('scroll',scrollListener);
    return()=>{
      window.removeEventListener('scroll',scrollListener);
    }
  })
return (
  <div className="page">
    <Header black={blackHeader}/>
    {featuredData && <FeaturedMovie item={featuredData}/>}
<section className="lists">
  {movieList.map((item,key)=>(
      <MovieRow key={key} title ={item.title} items = {item.items}/>
  ))}
</section>
<footer>
  Made using data from TMDB api
</footer>
{movieList.length<=0 &&
<div className='loading'>
  <img src='https://cdn.dribbble.com/users/1417337/screenshots/5750630/bubble-loader.gif'></img>
</div>}
  </div>
)
};