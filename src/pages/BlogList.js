// BlogList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import { Link } from 'react-router-dom';
import '../css/Homepage.css'
import '../css/BlogList.css';
import Navigation from './Navigation';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'blogs'));
                const blogsData = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                    createdAt: doc.data().createdAt.toDate() // Convert Firestore Timestamp to JS Date
                }));
                setBlogs(blogsData);
            } catch (error) {
                console.error('Error fetching blogs: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading blogs...</div>;
    }
if (!blogs) {
    return<div>no blogs</div>
}
    return (
        <div className="latest blog-list">
            <Navigation />
            <div className='fist-element'>Latest</div>
            <div className='latest-section-heading'>Explore Legal Topics and Life</div>
            <div className='latest-section-text'>Read informative and engaging blog posts about legal topics and law student life at University of Ilorin.</div>

            <div className='lastest-feature'>
                {blogs.map(blog => (
                    <Link to={`/blogs/${blog.id}`} className='latest' key={blog.id}>
                        <div className='latest-image'>
                            <img src={blog.imageUrl || 'default_image_url'} alt='blog' />
                        </div>
                        <div className='status'>All</div>
                        <div className='latest-heading'>{blog.title}</div>
                        <div className='latest-text'>{blog.summary}</div>
                        <div className='author'>
                            <div className='author-avatar'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className='author-info'>
                                <div>{blog.author}</div>
                                <pre>{blog.createdAt.toLocaleDateString()} . 5 min read</pre>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
