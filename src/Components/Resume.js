import React, { Component } from 'react';
import Icon from './Icon';
import './resume.css';

const preview={
    width: '200%',
    cursor: 'pointer',
    lineHeight: '2em',
    padding: '20% 5%',
    overflowX: 'hidden',
    color:'rgb(173,213,249)'
}

function Left(props) {   
    return (
         <div style={props.preview ? preview : {flex:1}}>
            <div id={!props.preview && 'avatar'}>
                <h2>Liz Jia</h2>
                 <div id={!props.preview && 'sns'}>
                    <a href="mailto:lizwebdesign@fox.com" target="_blank">
                        {!props.preview ? <Icon icon='envelop' />: null}
                   </a>
                    <a href="https://twitter.com/liz_j_z" target="_blank">
                        {!props.preview ? <Icon icon='twitter' />: null}
                    </a>
                    <a href="https://github.com/lizzyQ" target="_blank">
                        {!props.preview ? <Icon icon='github' />: null}
                    </a>
                    <a href="https://www.linkedin.com/in/zhen-jia/" target="_blank">
                        {!props.preview ? <Icon icon='linkedin' />: null}
                    </a>
                    <a href="/Images/resume.pdf" download='lizJiaResume' title="download my resume in PDF">
                        {!props.preview ? <Icon icon='download' />: null}
                    </a>
                </div>
                 <article id={!props.preview && 'about'}>
                   Passionate learner <br/> 
                   Curious Developer <br/>
                   Honest Coder <br/>                   
                   Optimistic Trilligual <br/>
                   Patient person <br/>
                 </article>
            </div>
        </div>
    );
}

function Right(props) {
    return (
        <div style={props.preview ? preview : {flex:2}}>
            <div id={!props.preview && 'exp'}>
                <h2>Experience</h2>
                <dl>
                    <dt>Web Developer <i>Feb 2015 - Present</i></dt>
                    <dd> 
                        I have spent the last year intensively learning to program, 
                        started practice Javascript in Free Code Camp,
                        which includes 30 projects and over 50 algorithms.
                        After aqucired Front End Certificate, 
                        I recently learning Python and Django.
                    </dd>
                </dl>
                <dl>
                    <dt>Digital Marketing Specialist<i>2014 - 2015</i></dt>
                    <dd>Accumulated 5 VIP customers, raised company profit by over 50K.
                        Created blogs, Marketing ads and guide brochures, 
                        enhanced customers understanding of Korean travel culture.</dd>
                </dl>
                <dl>
                    <dt>Interpreter <i>2012 - 2014</i></dt>
                    <dd>Consecutive Interpreted for online meetings and business trips.
                        <i>Korea institute for industry and economics</i>
                        Analyzed Chinese wedding market, 
                        planned “Wedding and Honeymoon in Jeju” project.
                        <i>Wedding Promessa</i>
                        Conducted text translation for Unilever Korea.
                        Designed online marketing materials, 
                        managed <i>Dr. Park Plastic surgery</i>'s Chinese social media.
                    </dd>
                </dl>
                <dl>
                    <dt>Web Designer <i>2012 - 2013</i></dt>
                    <dd>Designed User Interface in PSD, 
                        Interpreted PSD file into markup language.
                        Updated and streamlined existing code, Improved site performance. 
                        Specialized in CSS detangling, especially for cross-platform browser compatibility.
                        Worked with senior enginner, created intuitive user experience.
                    </dd>
                </dl>
            </div>
       </div>
    );
}

class Resume extends Component {
    
    render(){
        let renderer = this.props.renderer;
        let boxId = this.props.orientation ==='portrait' ? 'resumeColume': 'resumeRow';
        return (
            <div id={boxId}>
                {renderer==='left' || renderer==='whole' ? (<Left preview={renderer==='left' ? true : false} />) :  null}
                {renderer==='right' || renderer==='whole' ? ( <Right preview={renderer==='right' ? true : false} />) : null}
            </div>
        );
    }
}

export default Resume;