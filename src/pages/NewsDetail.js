import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import Navigation from './Navigation';
import '../css/NewsDetail.css';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsDoc = await getDoc(doc(db, 'news', id));
                if (newsDoc.exists()) {
                    setNews(newsDoc.data());
                } else {
                    console.error('News not found');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading news...</div>;
    }

    if (!news) {
        return <div className="not-found">News not found</div>;
    }

    return (
        <div>
            <Navigation />
            <hr/>
            <div className="news-detail-container">
                <h2 className="news-title">{news.title}</h2>
                <p className="news-author">by: <i>{news.authorName}</i></p>
                <p className="news-email">Email: <i>{news.email}</i></p>
                {news.image && <img src={news.image} alt={news.title} className="news-image" />}
                <div className="news-content">{news.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="news-paragraph">{paragraph}</p>
                ))}</div>
                <p className="news-publication-date">Published on: {new Date(news.publicationDate).toLocaleDateString()}</p>
                <p className="news-source">Source: {news.source}</p>
                <p className="news-summary"><strong>Summary:</strong> {news.summary}</p>
            </div>
        </div>
    );
};

export default NewsDetail;
