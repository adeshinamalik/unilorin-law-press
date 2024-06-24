import React, { useState, useEffect } from 'react';
import '../css/NewsList.css'
import Navigation from './Navigation';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import { images } from './Images';
import { Link } from 'react-router-dom';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getDocs(collection(db, 'news'));
                const newsData = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setNews(newsData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        // console.log(fetchNews());
        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading news...</div>;
    }

    if (error) {
        return (
            <div>
                <Navigation />
                <div>Error: {error}</div>;
            </div>)
    }
    console.log(news);
    if (!news) {
        return (
            <div>
                <Navigation />
                <div>no news for now</div>
            </div>
        )

    }

    return (
        <div>
            <Navigation />
            <h1>News Listings</h1>
            <Link className='news-feature'>
                {news.map((article, index) => (

                    <div key={index} className='news'>
                        <div className='news-image'>
                            {article.imageurl ?
                                <img src={article.imageurl} alt={article.title} />
                                :
                                <img src={images.lastestimage1} alt={article.title} />
                            }
                        </div>
                        <div className='news-info'>
                            <div className='news-date'>
                                <div className='news-date'>Fri 09 Feb 2024</div>
                                <div className='news-location'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <div>Online</div>
                                </div>
                            </div>
                            <div className='latest-heading'>{article.title}</div>
                            <div className='latest-text'>Learn Why legal Research is a crucial Skill For Law  Students.</div>
                            <div className='author'>
                                <div className='author-avatar'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                                <div className='author-info'>
                                    <div className='text'>John Doe</div>
                                    <pre>11 Jan 2022    .     5 min read</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Link>
        </div>
    );
};

export default NewsList;
