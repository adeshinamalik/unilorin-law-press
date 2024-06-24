import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import '../css/BlogDetail.css'; // Import your CSS file for BlogDetail styling
import Navigation from './Navigation';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogDoc = await getDoc(doc(db, 'blogs', id));
                if (blogDoc.exists()) {
                    setBlog(blogDoc.data());
                } else {
                    console.error('Blog not found');
                }
            } catch (error) {
                console.error('Error fetching blog: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog(); // Initial fetch of blog based on id

    }, [id]);

    // Loading state check
    if (loading) {
        return <div className="loading">Loading blog...</div>;
    }

    // Blog not found check
    if (!blog) {
        return <div className="not-found">Blog not found</div>;
    }

    // Split content by new lines to create paragraphs
    const contentParagraphs = blog.content.split('\n').map((paragraph, index) => (
        <p key={index} className="blog-paragraph">{paragraph}</p>
    ));
console.log(blog.content.split('\n'));
    // Render blog details if blog exists
    return (
        <div className='blog-detail'>
            <Navigation />
            <hr />
            <div className="blog-detail-container">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-email">Email: <i>{blog.email}</i></p>
                <p className="blog-author">by: <i>{blog.author}</i></p>
                {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="blog-image" />}
                <div className="blog-content">
                    {contentParagraphs}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
