import React from 'react';
import Head from 'next/head';
import Page from '../components/layouts/page';

export default () => (
  <Page title='Sutherlandon'>
    <div className="logo-container">
      <img src='static/img/Gg/Gg-1.1.svg' alt='Gg Logo' />
    </div>
    <div className="content-border">
      <div className="content">
        <h1>Projects</h1>
        <div className="pure-g">
          <div className="project-container">
            <div className="pure-u-1 pure-u-lg-1-2 project-description">
              <div className="gutter">
                <h2 className="project-title">Reel Deal Theater Redesign</h2>
                Our local theater's website looks like it <a
                  href="http://reeldealtheater.com"
                  target="_">
                    hasn't been updated since 1993
                </a>.
                There are a couple goals with this project.
                <ol>
                  <li>
                    Improve the website in areas where it is lacking such as modern design and
                    being mobile friendly.
                  </li>
                  <li>
                    It is clear from using the website that the process for updating it
                    involves manual editing of HTML files, so there should be some kind of CMS built to
                    support udating data.
                  </li>
                  <li>
                    Being that it currently is just html files, it loads very quickly, so the
                    goal is to preserve it's performance.
                  </li>
                </ol>
                You can see the live development version <a
                  href="http://sutherlandon.com/reeldeal"
                  target="_">
                    here
                </a>.
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 project-sample">
              <div className="gutter">
                <a href="http://sutherlandon.com/reeldeal" target="_">
                  <img className="pure-img" src="static/img/theater-cms.jpg" />
                </a>
              </div>
            </div>
            <div className="pure-u-1 action-container">
              <a className="action-button" target="_"
                href="https://github.com/sutherlandon/theater-cms">
                Fork on github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
