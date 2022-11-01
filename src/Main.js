import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Main = ({ limit }) => {
    // 데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    const MS = useRef(null);
    const movieData = async () => {
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}`);
        console.log(movie.data.data.movies);
        getMovie(movie.data.data.movies);
        setLoad(false);
    };
    useEffect(() => {
        movieData()
    }, []);
    return (
        <section className='Main'>
            {
                load
                    ? <div>Loading.... <i className="xi-spinner-1"></i></div>
                    :
                    <Slider
                        slidesToShow={5}
                        arrows={false}
                        dots={true}
                        slidesToScroll={5}
                        ref={MS}
                    >
                        {
                            movie.map(it => {
                                return (
                                    <div key={it.id} className="itm">
                                        <figure>
                                            <img src={it.large_cover_image} alt={it.title} />
                                        </figure>
                                        <div className="case">
                                            <div className='title'>{it.title_long}</div>
                                            <div className='desc'>{it.description_full.substr(0, 100)} ... </div>
                                            <ul className='genre'>
                                                {
                                                    it.genres.map((g, i) => <li key={i}>{g}</li>)
                                                }
                                            </ul>
                                        </div>
                                        <button className='btn'> + </button>
                                    </div>
                                )
                            })
                        }
                    </Slider>
            }
            <div className="arrows">
                <i className='xi-arrow-left' onClick={() => MS.current.slickPrev()} />
                <i className='xi-arrow-right' onClick={() => MS.current.slickNext()} />
            </div>
        </section>
    )
}

export default Main;
