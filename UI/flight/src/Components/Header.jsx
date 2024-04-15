import { useState } from "react"
import WindowSize from "./WindowSize";

export default function Header() {
    const [ hamClick, setHamClick ] = useState(false);
    const { width, height } = WindowSize();
    
    return(
        <>
            <nav className="flex">
                <div className="logo-div">
                    <a href="#">
                        <span>
                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z" fill="#F7F5F2"></path><path d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z" fill="#F7F5F2"></path><path d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z" fill="#F7F5F2"></path><path d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z" fill="#F7F5F2"></path></svg>
                        </span>
                        {
                            width>994 ? <span>Dropbox</span> : <span className="none">Dropbox</span>
                        }
                    </a>
                </div>
                {
                    width>994 ? <div className="nav-real-div">
                    <ul>
                        <li>Why Dropbox?</li>
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Pricing</li>
                        <li className="contact">Contact</li>
                        <li>Get app</li>
                    </ul>
                    <div className="btn-get-started">
                        <button>Get started</button>
                    </div>
                </div> : (
                        hamClick && <div className="nav-real-div">
                        <ul>
                            <li>Why Dropbox?</li>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                            <li>Get app</li>
                        </ul>
                        <div className="btn-get-started">
                            <button>Get started</button>
                        </div>
                    </div>
                    )
                }
                <div className="nav-last-div">
                    <div>
                        <a href=""><span>Sign up</span></a>
                    </div>
                    <div>
                        <a href=""><span>Login</span></a>
                    </div>
                    <div className={width>994 ? "btn-get-started" : "none"}>
                        <a href="">
                            <button>Get started&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rarr;</button>
                        </a>
                    </div>
                    {
                        width>994? '': <div>
                        <a href="" onClick={(e)=>{
                            e.preventDefault();
                            setHamClick(!hamClick)
                        }}>
                            {
                                width>994 ? "" : hamClick ? 
                                <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon" width="32" height="32" role="presentation" focusable="false"><path d="m17.5 6.5-11 11m11 0-11-11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
                                : 
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon" width="32" height="32" role="presentation" focusable="false"><path d="M18.5 16.5h-13V18h13v-1.5Zm0-5.5h-13v1.5h13V11Zm0-5.5h-13V7h13V5.5Z" fill="currentColor" vectorEffect="non-scaling-stroke"></path></svg>
                                </span> 
                            }
                        </a>
                    </div>
                    }
                </div>
            </nav>
        </>
    )
}