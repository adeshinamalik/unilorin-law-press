import React from 'react'
import Navigation from './Navigation'
import { images } from './Images'


const Events = () => {
  return (
    <div>
      <Navigation />
      <div className='event-section'>
        <div>Discover</div>
        <div className='event-section-heading'>Upcoming</div>
        <div>Stay updated on the latest legal events and activities organized by Law Student Society for law students.</div >
        <div className='event-feature'>
          <div className='event'>
            <div className='event-image'>
              <img src={images.lastestimage1} alt='eventicon' />
            </div>
            <div className='event-info'>
              <div className='event-date'><div className='event-date'>Fri 09 Feb 2024</div>
                <div className='event-location'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>Online</div>
                </div>
              </div>
              <div className='latest-heading'>The Importance of Legal Research</div>
              <div className='latest-text'>Learn Why legal Research is a crucial Skill For Law  Students.</div>
              <div className='author'>
                <div className='author-avatar'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div className='author-info'>
                  <div className='text'>John Doe</div>
                  <pre>11 Jan 2022    .     5 min read</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events