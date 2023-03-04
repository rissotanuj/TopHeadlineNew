import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
  const [articles, setarticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


  const update = async () => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=90f23f07a13740a79338b14c56307984&page=${page}&category=${props.category}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(60);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    console.log(parsedData);
    props.setProgress(100);
  };

  const fetchMoreData = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=90f23f07a13740a79338b14c56307984&page=${page}&category=${props.category}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    console.log(parsedData);
  }

  useEffect(() => {
    update();
  }, []);

  return (
    <div className="d-flex   flex-column">
      <h1 className="text-center my-2 py-4">Top headlines on news</h1>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalResults !== articles.length}
          loader={<h4 className="text-center"><Spinner/></h4>}
        >       
      <div className=" row row-cols-md-3 " style={{paddingLeft:"50px"}}>
        {articles.map((articles) => {
          return (<NewsItem element={articles} key = {articles.url}/>);
        })}
      </div>
        </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
      category: "general",    
}
