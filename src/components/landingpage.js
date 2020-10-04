import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Resume from './resume';

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://i.pinimg.com/originals/3b/7d/6f/3b7d6f60e2d450b899c322266fc6edfd.png'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p>
                {' '}
                HTML/CSS | Bootstrap | Java | Spring | SpringBoot | Javascript |
                ReactJS | ReactNative | NodeJS | Express | MongoDB{' '}
              </p>
              <div className='social-links'>
                {/** LinkedIn*/}
                <a
                  href='https://in.linkedin.com/in/meghrajfalle'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>
                {/* Github*/}
                <a
                  href='https://github.com/meghrajfalle'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
                {/** FreeCodeCamp*/}
                <a
                  href='https://www.freecodecamp.org/meghrajfalle'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>
                {/** Twitter*/}
                <a
                  href='https://twitter.com/meghraj_falle'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-twitter-square' aria-hidden='true' />
                </a>
                {/** Facebook*/}
                <a
                  href='https://www.facebook.com/meghraj.falle'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-facebook-square' aria-hidden='true' />
                </a>
                {/** Youtube*/}
                <a
                  href='https://www.youtube.com/meghrajfalle'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-youtube-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
