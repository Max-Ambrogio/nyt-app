import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleSearchForm from "../components/ArticleSearchForm";
import ArticleResults from "../components/ArticleResults";
import { NYT_API_KEY, NYT_ARTICLE_ENDPOINT } from '../constants';


export default function Search(props){
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([]);
    const [rawSearchParams, setRawSearchParams] = useState({})
    console.log('Search for', searchParams)


    // if(beginDate)
   
    
    const q = searchParams.get('q');
    const bD = searchParams.get('startDate');
    const eD = searchParams.get('endDate');
    const sort = searchParams.get('sort');
    
    
    useEffect(() => {
        if(!q){
            return
        };

        const validParams = Object.keys(rawSearchParams).map((key) => {
            const val = rawSearchParams[key]
            return (val) ? `${key=val}` : ''
        }).join('&')

        console.log('searching for articles matching: ', q)
        fetch(`${NYT_ARTICLE_ENDPOINT}?q=${q}&api-key=${NYT_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('got data', data)
            setArticles(data.response.docs)
        })
    }, [rawSearchParams])
    
    const handleSearch = (values) => {
        setSearchParams( { values } )
        setRawSearchParams( {values} )

        
        // console.log('query', query)
    }


    return(
        <>
            <ArticleSearchForm onSubmit={handleSearch} />
            <ArticleResults articles={articles} /> 
        </>
    )
}