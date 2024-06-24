import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { images } from './Images';
// import '../css/ArticlesList.css';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'articles'));
                const articlesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setArticles(articlesData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Loading articles...</div>;
    }

    if (error) {
        return (
            <div>
                <Navigation />
                <div>Error: {error}</div>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div>
                <Navigation />
                <div>No articles available</div>
            </div>
        );
    }
    console.log(articles);

    return (
        <div>
            <Navigation />
            <h1>News Listings</h1>
            <div className='news-feature'>
                {articles.map((article, index) => (
                    <Link to={`/articles/${article.id}`} key={index} className='news'>
                        <div className='news-image'>
                            {article.image ? (
                                <img src={article.image} alt={article.title} />
                            ) : (
                                <img src={images.alternateImage} alt="default" />
                            )}
                        </div>
                        <div className='news-info'>
                            <div className='news-date'>
                                <div className='news-date'>{new Date(article.publicationDate).toDateString()}</div>
                                <div className='news-location'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <div>Online</div>
                                </div>
                            </div>
                            <div className='latest-heading'>{article.title}</div>
                            <div className='latest-text'>{article.summary || 'Learn Why legal Research is a crucial Skill For Law  Students.'}</div>
                            <div className='author'>
                                <div className='author-avatar'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                                <div className='author-info'>
                                    <div className='text'>{article.authorName || 'Unknown Author'}</div>
                                    <pre>{new Date(article.publicationDate).toDateString()} . 5 min read</pre>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ArticlesList;
