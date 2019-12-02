import React , { Fragment } from 'react';
import Content from './layouts/content';

import logo from '../images/Gg/Gg-1.0.svg';
import tsweeperImg from '../images/tsweeper.jpg';
import theaterCMSImg from '../images/theater-cms.jpg';
import qwixxImg from '../images/qwixx-app.jpg';

export default () => (
  <Fragment>
    <div className="logo-container">
      <img src={logo} alt='Gg Logo' />
    </div>
    <Content>
      <h1>Projects</h1>
      <div className="pure-g">
        <div className="project-container">
          <div className="pure-u-1 pure-u-lg-1-2 project-description">
            <div className="gutter">
              <h2 className="project-title">QWIXX App</h2>
              QWIXX is a table top game played with six dice and score cards.  I enjoyed the game so much
              that I built this web app as a passion project. The main goal of this project was to make the
              game more accessible because it is not always practicle to roll dice, for example, in the car
              or on an airplane.  To support that goal, this app scales to any size screen gracefully and
              is a Progressive Web App so you can install it on your device to have offline access to it
              everywhere. You'll find a link to the rules in the app.<br/>
              <br/>
              One design decision that I made that is important to note is that the app does not enforce
              any of the game rules. Since QWIXX is a table top game, families may have house rules or decide to 
              disregard certian rules all together, and I didn't to eliminate that aspect of the game.  
              There is a link to the game rules included in the app so users can go read up on how to play.<br/>
              <br/>
              Check it out at <a
                href="https://sutherlandon.com/qwixx-app" target="_">
                  sutherlandon.com/qwixx-app
              </a>.
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 project-sample">
            <div className="gutter">
              <a href="https://sutherlandon.com/qwixx-app" target="_">
                <img className="pure-img" src={qwixxImg} alt='QWIXX App preview'/>
              </a>
            </div>
          </div>
          <div className="pure-u-1 action-container">
            <a className="action-button" target="_"
              href="https://github.com/sutherlandon/qwixx-app">
              View Source
            </a>
          </div>
        </div>
        <div className="project-container">
          <div className="pure-u-1 pure-u-lg-1-2 project-description">
            <div className="gutter">
              <h2 className="project-title">T*Sweeper</h2>
              T*Sweeper is a text based minesweeper game.  I was inspired by a terminal based
              minesweeper game that I wrote as an assignment in high school.  This game uses 
              nothing but text for graphics and layout, and accepts typed commands, simulating a 
              unix terminal. Built purely in React, it is also a Progressive Web App, so you can 
              install it on your phone.<br/>
              <br/>
              Check it out at <a
                href="https://tsweeper.com" target="_">
                  tsweeper.com
              </a>.
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 project-sample">
            <div className="gutter">
              <a href="https://tsweeper.com" target="_">
                <img className="pure-img" src={tsweeperImg} alt='T*Sweeper preview'/>
              </a>
            </div>
          </div>
          <div className="pure-u-1 action-container">
            <a className="action-button" target="_"
              href="https://github.com/sutherlandon/tsweeper">
              View Source
            </a>
          </div>
        </div>
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
                  mobile friendliness.
                </li>
                <li>
                  It is clear from using the website that the process for updating it
                  involves manual editing of HTML files, so there should be some kind of CMS built to
                  support udating data.
                </li>
                <li>
                  Being that its currently is just html files, it loads very quickly, so the
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
                <img className="pure-img" src={theaterCMSImg} alt='TheaterCMS preview'/>
              </a>
            </div>
          </div>
          {/*}
          <div className="pure-u-1 action-container">
            <a className="action-button" target="_"
              href="https://github.com/sutherlandon/theater-cms">
              Fork on github
            </a>
          </div>
          */}
        </div>
      </div>
    </Content>
  </Fragment>
);
