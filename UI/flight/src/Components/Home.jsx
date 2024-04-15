
import video from '../assets/video.mp4'
import emoji from '../assets/emoji-smile.svg'
import cloud from '../assets/cloud done.svg'
import twinkle from '../assets/twinkle.svg'
import shield from '../assets/shield.svg'

export default function Home() {
    return(
        <div className="home-container">
            <div className="home-big-text">
                <span>Join over 700 million registered users who trust Dropbox</span>
            </div>
            <div className="home-small-text">
                <span>Easy to use, reliable, private, and secure. It's no wonder Dropbox is the choice for storing and sharing your most important files.</span>
            </div>
            <div className="home-signup-button">
                <span>Find your plan</span>
                <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false"><path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
            </div>
            <div className='home-video-div'>
                <video loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='home-dropbox-features'>
                <h1>See what sets Dropbox apart</h1>
                <div className='home-dropbox-features-container'>
                    <div>
                        <img src={emoji} alt="" />
                        <div>
                            <h2>Your files, not ours</h2>
                            <p>With Dropbox, your files belong to you, not us, so you can be sure we're not reselling your data.</p>
                        </div>
                    </div>
                    <div>
                        <img src={cloud} alt="" />
                        <div>
                            <h2>All your files in one place</h2>
                            <p>Store computer backups, photo libraries, thousands of documents—all your files, in the same place.</p>
                        </div>
                    </div>
                    <div>
                        <img src={twinkle} alt="" />
                        <div>
                            <h2>One-of-a-kind functionality</h2>
                            <p>Store files as large as 2 TB each, sync at light speed, and allow anyone to preview nearly 200 file types.</p>
                        </div>
                    </div>
                    <div>
                        <img src={shield} alt="" />
                        <div>
                            <h2>Ease of use and security</h2>
                            <p>2/3 of surveyed users say Dropbox keeps their files more secure and we're a leader in ease of use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}