import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase/Firebase';
import '../css/EventDetails.css'; // Import your CSS file for EventDetails styling
import Navigation from './Navigation';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventDoc = await getDoc(doc(db, 'events', id));
                if (eventDoc.exists()) {
                    setEvent(eventDoc.data());
                } else {
                    console.error('Event not found');
                }
            } catch (error) {
                console.error('Error fetching event: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent(); // Initial fetch of event based on id

    }, [id]);

    // Loading state check
    if (loading) {
        return <div className="loading">Loading event...</div>;
    }

    // Event not found check
    if (!event) {
        return <div className="not-found">Event not found</div>;
    }

    // Parse event date
    let eventDate = 'N/A';
    if (event.eventDate && event.eventDate.seconds) {
        eventDate = new Date(event.eventDate.seconds * 1000).toLocaleDateString();
    }

    // Render event details if event exists
    return (
        <div className='event-detail'>
            <Navigation />
            <hr />
            <div className="event-detail-container">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">Date: <i>{eventDate}</i></p>
                <p className="event-location">Location: <i>{event.location}</i></p>
                {event.image && <img src={event.image} alt={event.title} className="event-image" />}
                <div className="event-description">
                    {event.description.split('\n').map((paragraph, index) => (
                        <p key={index} className={/^##/.test(paragraph) ? 'bold-heading' : ''}>
                            {/^##/.test(paragraph) ? paragraph.replace(/^##/, '') : paragraph}
                        </p>
                    ))}
                </div>
                <p className="event-organizer">Organizer: <i>{event.organizerName}</i></p>
                <p className="event-email">Email: <i>{event.email}</i></p>
            </div>
        </div>
    );
};

export default EventDetails;
