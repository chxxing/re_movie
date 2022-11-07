import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ movie, setMovie }) => {
    const navigate = useNavigate();
    // const [movie, setMovie] = useState([]);
    const [input, setInput] = useState(null);
    // const getMovie = async () => {
    //     const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${input}`);
    //     setMovie(res.data.data.movies);
    // };
    const searchHandler = (e) => {
        if (e.target.value.length > 2) {
            setInput(e.target.value)
        } else {
            setInput(null)
        }
    };
    const submitMovie = e => {
        // form 눌렀을때 새로고침 안되게 막음
        e.preventDefault();
        // getMovie();
        navigate(`/search?query_term=${input}`);
    };
    return (
        <div className='Search'>
            <form onSubmit={submitMovie}>
                <input type="text" onChange={searchHandler} />
                <button>
                    <i className="xi-search"></i>
                </button>
            </form>
        </div>
    )
}

//https://yts.mx/api/v2/list_movies.json?query_term=godfather
export default Search