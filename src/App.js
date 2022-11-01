import React from 'react';
import List from './List';
import './common.scss';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
    const genreList = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Romance",
        "Thriller",
        "Western"
    ];
    return (
        <div>
            <ul className='List'>
                {
                    genreList.map(it => {
                        return (
                            <li>
                                <Link to={it}>{it}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Routes>
                {
                    genreList.map(it => {
                        return (
                            <Route path={it} element={<List genre={it} limit={5} />} />
                        )
                    })
                }
            </Routes>

            <List genre='Drama' limit={20} />
            <List genre='Action' limit={20} />
            <List genre='Horror' limit={20} />
        </div>
    )
}

export default App
