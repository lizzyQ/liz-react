import React, { Component } from 'react';
import projectData from './projectData';
import './project.css';
import holder from './Images/prjholder.svg';

function Left(props) {
    const src = `${process.env.PUBLIC_URL}/assets/${props.data.img}`;
    let bgImg = props.preview ? { 
         height:'40vh',
         background: `url("${holder}") no-repeat top left`,
         backgroundSize: 'contain'
    } : { 
         background: `url("${src}") no-repeat center center`,
         backgroundSize: 'contain'
    }; 
    
    let tagItems = props.data.tags.map( (ele,idx) => { 
                     return ( <li key={idx}> {ele} </li> ); 
                    });

    return (
        <div id={props.preview ? 'preview' : 'imgBox'}>
            <div id={!props.preview && 'prjImg'} style={bgImg}>
                {props.preview  ? <h5 style={{width:'80%', padding:'25% 0 0 10%', textAlign:'center' }}>{props.data.title}</h5>: null}
            </div>
             <ul id={!props.preview && 'prjTags'} >
                 {tagItems}
            </ul>
       </div>
    );
}


function Right(props) {
    return (
        <div id={props.preview && 'preview'}>
             <h1 id={!props.preview && 'prjTitle'}>{props.data.title}</h1>
             {props.preview  ? null : (
                   <div id={!props.preview && 'gotoLink'}>
                        {props.data.codepen ? <a href={props.data.codepen} target='_blank'>See In CodePen</a> : null}
                        {props.data.github ? <a href={props.data.github} target='_blank'>See In Github</a> : null}
                    </div> 
              )}
             <article id={!props.preview && 'prjDscpt'} >
                {props.data.description}
             </article>
       </div>
    );
}

class Project extends Component {   
    
    render(){
        let renderer = this.props.renderer;
        let boxId = this.props.orientation ==='portrait' ? 'pjctColume': 'pjctRow';
        let idx=this.props.frameN-1;
        let prj=projectData.projects[idx];

        return (
            <div id={boxId}>
                { renderer==='left' || renderer==='whole' ? (<Left preview={renderer==='left' ? true : false}  data={prj} />) :  null }
                { renderer==='right' || renderer==='whole' ? ( <Right preview={renderer==='right' ? true : false} data={prj} />) : null }
            </div>
        );
    }
}

export default Project;