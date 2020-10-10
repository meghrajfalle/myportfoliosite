import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Meghraj Falle</h2>
            <h4 style={{ color: 'grey' }}>Programmer </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{' '}
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Flat B2-7, Mangal Co-op Hsg. Society, Alandi Road, 411003</p>
            <h5>Phone</h5>
            <p>+91 7972539965</p>
            <h5>Email</h5>
            <p>meghrajfalle@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2016}
              schoolName='Savitribai Phule Pune University'
              schoolDescription=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            />
            <Education
              startYear={2011}
              endYear={2012}
              schoolName='Kendriya Vidyala B.E.G'
              schoolDescription=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2019}
              jobName='Software Engineering Associate @ Amdocs'
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            />
            <Experience
              startYear={2019}
              endYear='Presently working'
              jobName='Software Engineer @AppDirect'
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill='javascript' progress={100} />
            <Skills skill='HTML/CSS' progress={80} />
            <Skills skill='NodeJs' progress={50} />
            <Skills skill='ReactJs' progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
