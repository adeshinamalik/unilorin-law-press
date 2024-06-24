import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import Navigation from './Navigation';
import '../css/ArticlePage.css';

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const docRef = doc(db, 'articles', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setArticle({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError('Article not found');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <div>Loading article...</div>;
    }

    if (error) {
        return (
            <div>
                <Navigation />
                <div>Error: {error}</div>
            </div>
        );
    }

    return (
        <div>
            <Navigation />
            <div className="article-container">
                <h1>{article.title}</h1>
                <p><strong>By:</strong> {article.authorName}</p>
                <p><strong>Published on:</strong> {new Date(article.publicationDate).toLocaleDateString()}</p>
                {article.image && (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="article-image"
                    />
                )}
                <p className="article-content">{article.content}</p>
                <p><strong>Source:</strong> {article.source}</p>
                <p><strong>Summary:</strong> {article.summary}</p>
            </div>
        </div>
    );
};

export default ArticlePage;
