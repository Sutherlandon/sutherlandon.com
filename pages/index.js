import React from 'react';

export default () => (
  <React.Fragment>
  <div id="background-fader"></div>
  <div className="page-wrapper">
    <div className="logo-container">
      <img src='static/img/Gg/Gg-1.1.svg' alt='Gg Logo' />
    </div>
    <div className="content-border">
      <div className="content">
        <h1>Projects by Landon Sutherland</h1>
        <div className="pure-g">
          <div className="project-container">
            <div className="pure-u-1 pure-u-lg-1-2 project-description">
              <div className="gutter">
                <h2 className="project-title">Reel Deal Theater Redesign</h2>
                Our local theater's website looks like it
                <a href="http://reeldealtheater.com" target="_">came out of 1993</a>.  My aim with this
                project is to bring new life to the site, bring it into the modern age
                of web design, and bring the information people want most right to the
                front where it is easy to find.  Below is the current design of the
                new homepage. You can see the live development version
                <a href="http://sutherlandon.com/reeldeal" target="_"> here</a>.
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 project-sample">
              <div className="gutter">
                <img className="pure-img" src="static/img/theater-cms.jpg" />
              </div>
            </div>
            <div className="pure-u-1 action-container">
              <a className="action-button" target="_"
                href="https://github.com/sutherlandon/theater-cms">
                Fork on github
              </a>
            </div>
          </div>
          {/*
          <div className="project-container">
            <div className="pure-u-1 pure-u-lg-1-2 project-description">
              <div className="gutter">
                <h2 className="project-title">Gotee Films</h2>
                Gotee Films is a project in Mobile Videography.  I go to friend's
                weddings and make films of their day.  All footage is captured on an iPad
                Mini 2 or recently, an iPhone 6s.  I also stream weddings so people
                who cannot make it can still be part of the day.  Below is a sample
                of my work.  Check out the channel on YouTube to see more.
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 project-sample">
              <div className="gutter">
                <div className="iframe-yt">
                  <iframe src="https://www.youtube.com/embed/fJRpO99_4cY"
                    frameBorder="0"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
            <div className="pure-u-1 action-container">
              <a className="action-button" target="_"
                href="https://www.youtube.com/channel/UCvMYlSgGDLTFJNovCZD7yOw">
                Find on YouTube
              </a>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
    <div className="footer">
      Designed by Landon Sutherland |
      Built using <a href="https://purecss.io/">Pure</a> & <a href="http://lesscss.org/">Less</a>
    </div>
  </div>
  </React.Fragment>
);
