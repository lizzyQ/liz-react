import React, { Component } from 'react';
import projectData from './projectData';
import './prjList.css';

class PrjList extends Component {   
    passList(idx) {
        this.props.selectList(idx);
    }
    render(){
        let boxId = this.props.orientation ==='portrait' ? 'listColume': 'listRow';
        let titles = projectData.projects.map( (ele,idx) => { 
            let color = idx<=72 ? (5 * idx) : (5 * (idx-72));
            return ( 
            <li key={idx} onClick={this.passList.bind(this,idx)} style={{color:`hsl(${color}, 100%, 50%)`}}> {ele.title} </li> 
            ); 
        });
        return (
            <div id={boxId}>
             <div id='listBox'>
                <h2 id='panel'><strong onClick={this.props.closeList}> &#10799; </strong> Projects</h2>
                <ul>
                    {titles}
                </ul>
             </div>
            </div>
        );
    }
}

export default PrjList;