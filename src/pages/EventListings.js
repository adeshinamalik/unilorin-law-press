import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Importing Timestamp from firebase/firestore
import { db } from './Firebase/Firebase'; // Assuming db is the Firebase Firestore instance
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { images } from './Images';


const EventListings = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        const eventsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(); // Fetch events when the component is mounted
  }, []);

  // Loading state check
  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  // No events found check
  if (events.length === 0) {
    return <div className="no-events">No events found</div>;
  }
  console.log(events[0].Date);
  return (
    <div>
      <Navigation />
      <div className='event-section'>
        <div>Discover</div>
        <div className='event-section-heading'>Upcoming</div>
        <div>Stay updated on the latest legal events and activities organized by Law Student Society for law students.</div>
        <div className='event-feature'>
          {events.map((event) => (
            <Link key={event.id} className='event' to={`/events/${event.id}`}>
              <div className='event-image'>
                <img src={event.image || images.lastestimage1} alt='eventicon' />
              </div>
              <div className='event-info'>
                <div className='event-date'>
                  <div className='event-date'>{event.date instanceof Date ? event.date.toLocaleDateString() : event.date}</div>
                  <div className='event-location'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>{event.location || 'Online'}</div>
                  </div>
                </div>
                <div className='latest-heading'>{event.title}</div>
                <div className='latest-text'>{event.description}</div>
                {event.organizer && (
                  <div className='author'>
                    <div className='author-avatar'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                    </div>
                    <div className='author-info'>
                      <div className='text'>{event.organizer}</div>
                      <pre>{event.createdAt && new Date(event.createdAt.seconds * 1000).toLocaleDateString()} . {event.readTime || '5'} min read</pre>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventListings;
