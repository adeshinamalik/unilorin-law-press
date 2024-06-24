// PostBlog.js
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './Firebase/Firebase';
import '../css/PostBlog.css';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const PostBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [summary, setSummary] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!content) newErrors.content = 'Content is required';
        if (!author) newErrors.author = 'Author name is required';
        if (!email) newErrors.email = 'Email address is required';
        if (content.split(' ').length > 1500) newErrors.content = 'Content must be less than 1500 words';
        return newErrors;
    };

    const handleImageUpload = async (file) => {
        if (!file) return null;
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitError(''); // Clear previous error messages

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }

        let imageUrl = null;
        if (image) {
            imageUrl = await handleImageUpload(image);
        }

        try {
            const docRef = await addDoc(collection(db, 'blogs'), {
                title,
                content,
                author,
                email,
                imageUrl,
                summary,
                createdAt: new Date(),
            });
            // Clear the form fields
            setTitle('');
            setContent('');
            setAuthor('');
            setEmail('');
            setImage(null);
            setSummary('');
            // Navigate to the newly created blog post
            navigate(`/blogs/${docRef.id}`);
        } catch (error) {
            console.error('Error adding blog post: ', error);
            setSubmitError('Failed to submit the blog post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navigation />
            <div className="post-blog-container">
                <h2>Post a Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={errors.title ? 'input-error' : ''}
                        />
                        {errors.title && <span className="error-message">{errors.title}</span>}
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className={errors.content ? 'input-error' : ''}
                        />
                        {errors.content && <span className="error-message">{errors.content}</span>}
                        <div className="word-count">{content.split(' ').length} / 1500 words</div>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className={errors.author ? 'input-error' : ''}
                        />
                        {errors.author && <span className="error-message">{errors.author}</span>}
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="form-group">
                        <label>Summary</label>
                        <textarea
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                    {submitError && <span className="error-message">{submitError}</span>}
                </form>
            </div>
        </div>
    );
};

export default PostBlog;
