import React from "react";
import { useParams } from "react-router-dom";

export default function SearchResults({articles}){

    let { articleId } = useParams()
    console.log('Article ID', articleId)

    if(!articleId){
        return(
            <p>Please Slelect an article.</p>
        )
    }

    const article = articles.find((a) => a.uri === articleId) //exact one that matches
    console.log(article)

    articleId = parseInt(articleId)



    return(
        <div className="grid">
            {articles.map((article, index) => {

                const date = new Date(`${article.pub_date}`)
                date.toDateString();
                
                console.log('article', article)
                return(
                    <div key={`${index}`} className='grid_item'>  
                        <div className="article_copy">
                            <h1>{article.headline.main}</h1>
                            <p>{article.abstract}</p>
                            <p className="byline">{article.byline.original}</p>
                            <div className="tags">
                                <a href="">{article.section_name}</a>
                            </div>
                            {/* <p className="date">{article.pub_date}</p> */}
                            <p className="date">{date.toDateString()}</p>
                        </div>
                        <img className="grid-img" src={`http://www.nytimes.com/${article.multimedia[0].url}`} alt="article image" />
                    </div>
                )
            })}
        </div>
    )
}

SearchResults.defaultProps = {
    articles: []
}