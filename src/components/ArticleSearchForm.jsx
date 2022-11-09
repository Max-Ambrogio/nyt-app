import React, {useState} from "react";

export default function ArticleSearchForm(props){

    const [values, setValues] = useState({
        sort: 'newest'
    })

    const handleChange = (evt) =>{
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onSubmit(values)

    }

    //use state variables

    return(
        <form onSubmit={handleSubmit}>
            <input className="search-form" type='text' value={values.q} onChange={(handleChange)} />
            <div className="date-search">
                <input type="date" name="start-date" id="start-date" value={values.startDate} onChange={(handleChange)}/>
                <p> - </p>
                <input type="date" name="end-date" id="end-date" value={values.endDate}   onChange={(handleChange)} />
            </div>
            <button className="submit" type="submit">Search</button>
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <select name="sort" className="dropdown-content" value={values.sort} onChange={(handleChange)}>
                    <option name='newest' value='newest'>Newest</option>
                    <option name='oldest' value='oldest'>Oldest</option>
                    <option name='relevance' value='best_match'>Relevance</option>
                </select>
            </div>
        </form>
    )
}