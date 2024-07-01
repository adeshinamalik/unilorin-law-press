import Navigation from './Navigation'
import '../css/Homepage.css'
import '../css/Mediaqueries.css'
import { images } from './Images'
import Login from './Login'
import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import BlogHome from './BlogHome'
import Footer from './Footer'
import EventHome from './EventHome'



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
                <BlogHome />
            </div>
            <EventHome />
            {/* //////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////// */}
            <div className='team-section'>
                <div>Members</div>
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
            <Footer />
            {showLogin && <Login />}
            {/* {showLogin:true && <div>testing</div>} */}
        </div >
    )
}

export default Homepage