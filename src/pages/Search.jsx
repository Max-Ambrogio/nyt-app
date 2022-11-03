import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleSearchForm from "../components/ArticleSearchForm";
import ArticleResults from "../components/ArticleResults";
import { NYT_API_KEY, NYT_ARTICLE_ENDPOINT } from '../constants';


export default function Search(props){
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('Search for', searchParams)
    const [articles, setArticles] = useState([])
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sort, SetSort] = useState('relevance');

    // if(beginDate)
   
    
    const q = searchParams.get('q');
    
    
    useEffect(() => {
        if(!q){
            return
        };
        if(!startDate){
            return
            // data.start
        };
        if(!endDate){
            return
            // data.start
        };
        if(!sort){
            return
            // data.start
        };

        console.log('searching for articles matching: ', q)
        fetch(`${NYT_ARTICLE_ENDPOINT}?q=${q}&api-key=${NYT_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('got data', data)
            setArticles(data.response.docs)
            
        })
    }, [q, sort, startDate, endDate])
    
    const handleSearch = (query, sort, startDate, endDate) => {
        setSearchParams( {q: query} )

        
        // console.log('query', query)
    }


    return(
        <>
            <ArticleSearchForm onSubmit={handleSearch} />
            <ArticleResults articles={articles} /> 
        </>
    )
}