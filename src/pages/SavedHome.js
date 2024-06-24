import Navigation from './Navigation'
import '../css/Homepage.css'
import { images } from './Images'
import Login from './Login'
import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'



const Homepage = () => {
    const { showLogin } = useContext(ThemeContext);

    return (
        <div>
            <Navigation />
            <div className='hero-section'>
                <div className='headings'>Empowering Law Students Through Knowledge and Representation</div>
                <div className='headings-paragraph'>
                    <p>Welcome to the University of Ilorin Law Students' Press Society (LSPS).
                        Our mission is to inform and represent the student body by providing a platform for legal discourse,
                        showcasing our journalistic report, organizing events, and sharing student perspectives.</p>
                    <div className='hero-button'>
                        <div className='learn-more signup'>Learn More</div>
                        <div className='signup2'>Sign Up</div>
                    </div>
                </div>
            </div>
            <div id='about-section' className='feature-headings'>Empowering Law Students Through Our Journalistic Report and Events</div>
            <div className='feature-section'>
                <div className='feature'>
                    <img src={images.fearureIcon} alt='eventicon' />
                    <div className='feature-heading'>Stay Informed with Our Engaging Events</div>
                    <div className='feature-text'>We showcase upcoming workshops, guest lectures, debates, or social events.</div>
                    <div className='learnmore'>Learn More
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='feature'>
                    <img src={images.featureIcon2} alt='eventicon' />
                    <div className='feature-heading'>Expand Your Legal Knowledge with Our Journal and we also offering a platform to publish Your Work</div>
                    <div className='feature-text'>Our journal publication and events provide valuable opportunities for law students to grow and learn.</div>
                    <div className='learnmore'>Learn More
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='feature'>
                    <img src={images.featureIcon3} alt='eventicon' />
                    <div className='feature-heading'>Discover the Latest Legal Insights through Our Journal and Events</div>
                    <div className='feature-text'>Join us to access our journalistic report, attend enriching events, and participate in student development programs.</div>
                    <div className='learnmore'>Learn More
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='latest-section'>
                <div>Latest</div>
                <div className='latest-section-heading'>Explore Legal Topics and Life</div>
                <div className='latest-section-text'>Read informative and engaging blog posts about legal topics and law student life at    University of Ilorin.</div>

                <div className='lastest-feature'>
                    <div className='latest'>
                        <div className='latest-image'>
                            <img src={images.lastestimage1} alt='eventicon' />
                        </div>
                        <div className='status'>All</div>
                        <div className='latest-heading'>The Importance of Legal Research</div>
                        <div className='latest-text'>Learn Why legal Research is a crucial Skill For Law  Students.</div>
                        <div className='author'>
                            <div className='author-avatar'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className='author-info'>
                                <div>John Doe</div>
                                <pre>11 Jan 2022    .     5 min read</pre>
                            </div>
                        </div>
                    </div>
                    <div className='latest'>
                        <div className='latest-image'>
                            <img src={images.lastestimage2} alt='eventicon' />
                        </div>
                        <div className='status'>Legal</div>
                        <div className='latest-heading'>The Roles of Lawyers in Society</div>
                        <div className='latest-text'>Learn Why legal Research is a crucial Skill For Law  Students.</div>
                        <div className='author'>
                            <div className='author-avatar'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className='author-info'>
                                <div>John Doe</div>
                                <pre>11 Jan 2022    .     5 min read</pre>
                            </div>
                        </div>
                    </div>
                    <div className='latest'>
                        <div className='latest-image'>
                            <img src={images.lastestimage3} alt='eventicon' />
                        </div>
                        <div className='status'>All</div>
                        <div className='latest-heading'>The Importance of Legal Research</div>
                        <div className='latest-text'>Learn Why legal Research is a crucial Skill For Law  Students.</div>
                        <div className='author'>
                            <div className='author-avatar'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className='author-info'>
                                <div>John Doe</div>
                                <pre>11 Jan 2022    .     5 min read</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    {/* //////////////////////////////////////////////////////////////// */}
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
                    {/* //////////////////////////////////////////////////////////////// */}
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
                    {/* //////////////////////////////////////////////////////////////// */}
                </div >
            </div >
            <div className='team-section'>
                <div>Latest</div>
                <div className='latest-section-heading'>Meet Our Team</div>
                <div className='latest-section-text'>Get to know the talented individuals behind society</div>

                <div className='team-members'>
                    <div className='team'>
                        <div className='team-image'>
                            <img src={images.AdioFaidatOluwapelumi} alt='eventicon' />
                        </div>
                        <div className='member-info'>
                            <div className='member-name'>Adio Faidat Oluwapelumi</div>
                            <div className='member-role'>Deputy Editor-in-chief</div>
                            <div>Faidat is a skilled editor with a passion for legal writing.</div>
                        </div>
                        <div className='social-media'>
                            <img src={images.linkedinicon} alt='linkedin' />
                            <img src={images.twittericon} alt='twitter' />
                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////// */}
                    <div className='team'>
                        <div className='team-image'>
                            <img src={images.HafsatSogbade} alt='eventicon' />
                        </div>
                        <div className='member-info'>
                            <div className='member-name'>Hafsat Sogbade</div>
                            <div className='member-role'>Public Relations Officer</div>
                            <div>Hafsat is a skilled editor with a passion for legal writing.</div>
                        </div>
                        <div className='social-media'>
                            <img src={images.linkedinicon} alt='linkedin' />
                            <img src={images.twittericon} alt='twitter' />
                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////// */}
                    <div className='team'>
                        <div className='team-image'>
                            <img src={images.OlasunkanmiFathiaOdunola} alt='eventicon' />
                        </div>
                        <div className='member-info'>
                            <div className='member-name'>Olasunkanmi Fathia Odunola</div>
                            <div className='member-role'>Executive</div>
                            <div>Olasunkanmi is a skilled editor with a passion for legal writing.</div>
                        </div>
                        <div className='social-media'>
                            <img src={images.linkedinicon} alt='linkedin' />
                            <img src={images.twittericon} alt='twitter' />
                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////// */}
                    <div className='team'>
                        <div className='team-image'>
                            <img className="fathia-pics" src={images.KutiFatihaEniola} alt='eventicon' />
                        </div>
                        <div className='member-info'>
                            <div className='member-name'>Kuti Fatiha Eniola</div>
                            <div className='member-role'>Editor-in-chief</div>
                            <div>Fathia is a skilled editor with a passion for legal writing.</div>
                        </div>
                        <div className='social-media'>
                            <img src={images.linkedinicon} alt='linkedin' />
                            <img src={images.twittericon} alt='twitter' />
                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////// */}

                    {/* /////////////////////////////////////////////////////////////// */}
                </div >
            </div >
            <footer>
                <div className='top'>
                    <div className='logo'>Logo</div>
                    <div className='link'>
                        <div>About us</div>
                        <div>Journal</div>
                        <div>Events</div>
                    </div>
                    <div className='media'>
                        <img src={images.facebookicon} alt='facebook' />
                        <img src={images.instagramicon} alt='instagram' />
                        <img src={images.twittericon} alt='twitter' />
                        <img src={images.linkedinicon} alt='linkedin' />
                    </div>
                </div>
                <hr />
                <div className='bottom'>
                    <div>© 2023 University of Ilorin Law Students' Press Society. All rights reserved.</div>
                    <div>Privacy Policy.</div>
                    <div>Terms and Conditions</div>
                    <div>Cookie Policy</div>
                </div>
            </footer>
            {showLogin && <Login />}
            {/* {showLogin:true && <div>testing</div>} */}
        </div>
    )
}

export default Homepage