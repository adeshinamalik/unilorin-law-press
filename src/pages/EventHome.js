import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { images } from './Images';
import '../css/Homepage.css';

const EventHome = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'events'));
                const eventsData = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                    createdAt: doc.data().createdAt.toDate() // Convert Firestore Timestamp to JS Date
                }));
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    if (loading) {
        return <div>Loading events...</div>;
    }

    return (
        <div>
            <div className="event-section event-sec">
            <div>Discover</div>
                <div className='event-section-heading'>Upcoming Events</div>
                <div>Stay updated on the latest legal events and activities organized by the Law Student Society for law students.</div>
                <div className='event-feature'>
                    {events.slice(0, 3).map(event => (
                        <Link key={event.id} className='event' to={`/events/${event.id}`}>
                            <div className='event-image'>
                                <img src={event.image || images.lastestimage1} alt='eventicon' />
                            </div>
                            <div className='event-info'>
                                <div className='event-date'>
                                    <div className='event-date'>{new Date(event.date).toLocaleDateString()}</div>
                                    <div className='event-location event-loca'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <div className='loca'>{event.location || 'Online'}</div>
                                    </div>
                                </div>
                                <div className='latest-heading'>{event.title}</div>
                                <div className='latest-text'>{truncateText(event.description, 15)}</div>
                                {event.organizer && (
                                    <div className='author'>
                                        <div className='author-avatar'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                        </div>
                                        <div className='author-info'>
                                            <div className='text'>{event.organizer}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
                <Link to='/events' className="more-button" onClick={() => navigate('/events')}>More</Link>
            </div>
        </div>
    );
};

export default EventHome;
