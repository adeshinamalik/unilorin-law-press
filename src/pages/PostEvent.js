import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from './Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navigation from './Navigation';
import '../css/PostEvent.css';

const PostEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!description) newErrors.description = 'Description is required';
        if (!organizer) newErrors.organizer = 'Organizer is required';
        if (!email) newErrors.email = 'Email address is required';
        if (!date) newErrors.date = 'Date is required';
        if (!location) newErrors.location = 'Location is required';
        return newErrors;
    };

    const handleImageUpload = async () => {
        if (image) {
            const storageRef = ref(storage, `events/${image.name}`);
            await uploadBytes(storageRef, image);
            const imageUrl = await getDownloadURL(storageRef);
            return imageUrl;
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setLoading(true);
        try {
            const imageUrl = await handleImageUpload();

            const docRef = await addDoc(collection(db, 'events'), {
                title,
                description,
                organizer,
                email,
                image: imageUrl,
                date,
                location,
                createdAt: new Date(),
            });
            console.log('Event added successfully with ID: ', docRef.id);
            navigate(`/events/${docRef.id}`);
        } catch (error) {
            console.error('Error adding event: ', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <Navigation />
            <h2>Post Event</h2>
            <div className="post-event-container">
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
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={errors.description ? 'input-error' : ''}
                        />
                        {errors.description && <span className="error-message">{errors.description}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Organizer</label>
                        <input
                            type="text"
                            value={organizer}
                            onChange={(e) => setOrganizer(e.target.value)}
                            className={errors.organizer ? 'input-error' : ''}
                        />
                        {errors.organizer && <span className="error-message">{errors.organizer}</span>}
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
                        <label>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={errors.date ? 'input-error' : ''}
                        />
                        {errors.date && <span className="error-message">{errors.date}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={errors.location ? 'input-error' : ''}
                        />
                        {errors.location && <span className="error-message">{errors.location}</span>}
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Posting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    )
};

export default PostEvent;
