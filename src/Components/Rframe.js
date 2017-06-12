import React, { Component } from 'react';
import Resume from './Resume';
import Home from './Home';
import Project from './Project';
import projectData from './projectData'; 


class Rframe extends Component {
    render(){
        const prttStyle={
                        textAlign:'center',
                        opacity: '.7',
                        cursor:'pointer'
                    };

        if(this.props.frameN===0){
            if( this.props.orientation ==='portrait' ){
                return (
                     <div style={prttStyle}> 
                           <h3>Warmlly greeting from Liz J</h3>
                           <p>Home</p>
                    </div>
                );
            }else{
                return ( <Home renderer='left'
                               orientation={this.props.orientation} /> );
            }
        }else if(this.props.frameN===22){
            if( this.props.orientation ==='portrait' ){
                return (
                         <div style={prttStyle}> 
                             <h3>Brief Summary of Liz J's Work Experience</h3>
                             <p>Resume</p>
                         </div>
                );
            }else{
                return ( <Resume renderer='left'
                                 orientation={this.props.orientation}  /> );
            }
        }else {
            let idx=this.props.frameN-1;
            let prj=projectData.projects[idx];

            if (this.props.orientation ==='portrait'){
                return( <div style={prttStyle}> 
                            <h3>{prj.title}</h3>
                            <p>Project No.{this.props.frameN}</p>
                        </div>
                );
            }else{
                return (
                     <Project renderer='left' 
                              orientation={this.props.orientation} 
                              frameN={this.props.frameN} />
                );
            }
        }
    }
}

export default Rframe;