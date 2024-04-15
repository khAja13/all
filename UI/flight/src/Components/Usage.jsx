import usage1 from '../assets/usage-1.webp';
import usage2 from '../assets/usage-2.webp';

export default function Usage() {
    return(
        <div>
            <div className='usage' >
                <div className='usage-heading'>
                    <h1>How will you use Dropbox?</h1>
                </div>
                <div className='usage-mid'>
                    <div className='usage-mid-cont'>
                        <div className='usage-tile'>
                            <div className='usage-tile-img-cont'>
                                <img src={usage1} alt="" />
                            </div>
                            <div className='usage-tile-mid'>
                                <span>For Work</span>
                                <p>Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all in one place.</p>
                                <div className="usage-button">
                                    <span>Get Dropbox for work</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false"><path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className='usage-tile'>
                            <div className='usage-tile-img-cont'>
                                <img src={usage2} alt="" />
                            </div>
                            <div className='usage-tile-mid'>
                                <span>For Personal use</span>
                                <p>Keep everything that's important to you and your family shareable and safe in one place. Back up files in the cloud, share photos.</p>
                                <div className="usage-button">
                                    <span>Get Dropbox for personal use</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" role="presentation" focusable="false"><path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='storage'>
                <div className="storage-heading">
                    <h1>Cloud storage you can count on</h1>
                </div>
                <div className="storage-content">
                    <div className="storage-box">
                        <h1>56%</h1>
                        <p>of Fortune 500 companies</p>
                        <p>have at least one Dropbox team plan.</p>
                    </div>
                    <div className="storage-box">
                        <h1>1B+</h1>
                        <p>mobile apps downloads</p>
                        <p>with Editor's Choice Awards from the Google Play and Apple App Store.</p>
                    </div>
                    <div className="storage-box">
                        <h1>600k+</h1>
                        <p>teams globally</p>
                        <p>use Dropbox to share work, safeguard content, and grow their business.</p>
                    </div>
                    <div className="storage-box">
                        <h1>4.5B</h1>
                        <p>connections and counting</p>
                        <p>created through Dropbox file sharing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}