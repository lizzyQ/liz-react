import React, { Component } from 'react';
import Resume from './Resume';
import Home from './Home';
import Project from './Project';
//import projectData from './Components/projectData'; 
/*
 let boxId = this.props.orientation ==='portrait' ? 'pjctColume': 'pjctRow';
 <div id={boxId} style={{fontSize:this.props.size}}>
                    <div>so if portrait I should do what</div>
                    <Rframe frameN={this.props.frameN} 
                            orientation={this.props.orientation} 
                            size={this.props.size} /> 
                    <Lframe frameN={this.props.frameN} 
                            orientation={this.props.orientation} 
                            size={this.props.size} />
                </div>
 */
class Mframe extends Component {
 
    render(){
        if(this.props.frameN===0){
            return (<Home renderer='whole' 
                          orientation={this.props.orientation} />);
        }else if(this.props.frameN===22){
            return(<Resume renderer='whole' 
                           orientation={this.props.orientation} />);
        }else{
            return (
               <Project renderer='whole' 
                        orientation={this.props.orientation}
                        frameN={this.props.frameN} />
            );
        }
    }
}

export default Mframe;