import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './Firebase/Firebase';
import Navigation from './Navigation';
import '../css/PostNews.css';

const PostNews = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [publicationDate, setPublicationDate] = useState('');
    const [source, setSource] = useState('');
    const [summary, setSummary] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!content) newErrors.content = 'Content is required';
        if (!authorName) newErrors.authorName = 'Author name is required';
        if (!email) newErrors.email = 'Email address is required';
        if (!publicationDate) newErrors.publicationDate = 'Publication date is required';
        if (content.split(' ').length > 1500) newErrors.content = 'Content must be less than 1500 words';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log('Form validation errors:', formErrors);
            return;
        }

        setLoading(true);

        try {
            let imageUrl = null;
            if (image) {
                const imageRef = ref(storage, `news_images/${image.name}`);
                await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(imageRef);
            }

            const docRef = await addDoc(collection(db, 'news'), {
                title,
                content,
                authorName,
                email,
                image: imageUrl,
                publicationDate,
                source,
                summary,
                createdAt: new Date(),
            });
            console.log('Document added successfully');
            navigate(`/news/${docRef.id}`);
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error adding news. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navigation />
            <h2>Post News</h2>
            <div className="post-news-container">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={errors.title ? 'input-error' : ''}
                        />
                        {errors.title && <span className="error-message">{errors.title}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className={errors.content ? 'input-error' : ''}
                        />
                        {errors.content && <span className="error-message">{errors.content}</span>}
                        <div className="word-count">{content.split(' ').length} / 1500 words</div>
                    </div>
                    <div className='form-group'>
                        <label>Author Name</label>
                        <input
                            type="text"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            className={errors.authorName ? 'input-error' : ''}
                        />
                        {errors.authorName && <span className="error-message">{errors.authorName}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Image</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Publication Date</label>
                        <input
                            type="date"
                            value={publicationDate}
                            onChange={(e) => setPublicationDate(e.target.value)}
                            className={errors.publicationDate ? 'input-error' : ''}
                        />
                        {errors.publicationDate && <span className="error-message">{errors.publicationDate}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Source</label>
                        <input
                            type="text"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Summary</label>
                        <textarea
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostNews;
