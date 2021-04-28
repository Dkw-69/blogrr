import React from 'react';
import Navbar from '../../navbar/Navbar';
import rightcol from '../../images/editor-desktop.svg'
import mobile from '../../images/illustration-phones.svg'
import laptop from '../../images/illustration-laptop-desktop.svg'

const Landing = () => {
    return ( 
        <>
        
        {/* header section */}
            <section className="header">
                <div className="header-wrapper">
                <Navbar/>
                {/* <img className="intro-bg-image" src={bg} alt="bg-image" /> */}
                    <div className="header-text">
                        <h1>A modern publishing platform</h1>
                        <p>
                            Get your audience and build your online brand 
                        </p>
                        <div>
                        <button className="common-button">Start for Free</button>
                        <button className="common-button-more">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="middle-header"><h4>Designed for the future</h4></div>
            <section className="about">
                <div class="about-left-col">
                    <div class="about-text">
                        <h4 className="about-headers">Introducing a smooth platform</h4>
                        <p>
                            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </p>
                        <div className="about-text-2">
                            <h4 className="about-headers">Robust intuitive environment</h4>
                            <p>
                                Flexible content management enables users to easily move through posts. 
                                Increase the usability of your blog 
                                by adding customized categories, sections, format, or flow. 
                                With this functionality, you’re in full control.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="about-right-col">
                    <img id="editor-desktop" src={rightcol} alt="rightcol-image" />
                </div>
            </section>
            <section className="state-features">
                    <div class="state-feature-leftcol">
                        <img src={mobile} alt="mobile-phones"/>
                    </div>
                    <div class="state-feature-rightcol">
                        <h4>State of the Art Infrastructure</h4>
                        <p>
                            With reliability and speed in mind, worldwide data centers provide<br/>the backbone for ultra-fast connectivity. 
                            This ensures your site will<br/>load instantly, no matter where your readers are, keeping your<br/>site competitive.
                        </p>
                    </div>
            </section>
            <section className="free">
                <div class="free-left-col">
                    <img src={laptop} alt="rightcol-image"/>
                </div>
                <div class="free-right-col">
                    <div class="free-text">
                        <h4 className="free-headers">Free, open, simple</h4>
                        <p>
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party<br/>commenting tools, 
                            and works seamlessly with Google Analytics.<br/>The architecture is clean and is relatively easy to learn.
                        </p>
                        <div className="free-text-2">
                            <h4 className="free-headers">Powerful tooling</h4>
                            <p>
                                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                                capable of<br/>producing even the most complicated sites.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="blogr-footer">
                    <h2>Blogr</h2>
                </div>
                <div className="left-footer-col">
                    <h5>Company</h5>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="right-footer-col">
                    <h5>Connect</h5>
                    <ul>
                        <li>Newsletter</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </footer>
        </>
     );
}
 
export default Landing;
