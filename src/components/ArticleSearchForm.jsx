import React, {useState} from "react";

export default function ArticleSearchForm(props){
    const [query , setQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sort, SetSort] = useState('relevance');

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onSubmit(query)

    }

    //use state variables

    return(
        <form onSubmit={handleSubmit}>
            <input className="search-form" type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="date-search">
                <input type="date" name="start-date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <p> - </p>
                <input type="date" name="end-date" id="end-date" value={endDate}   onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <button className="submit" type="submit">Search</button>
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <select className="dropdown-content" value={sort} onChange={(e) => SetSort(e.target.value)}>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                    <option value='best_match'>Relevance</option>
                </select>
            </div>
        </form>
    )
}