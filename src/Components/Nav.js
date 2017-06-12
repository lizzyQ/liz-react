import React, { Component } from 'react';
//import '../App.css';
//import logo from './logo.svg';
import Icon from './Icon';
import './nav.css';
/*
 <img src={logo} className="App-logo" alt="logo" />

 
*/

class Nav extends Component { 
    render(){
       let showIcon = this.props.orientation==='portrait'? true : false;
       let navId = this.props.orientation==='portrait'? 'prttNav': 'lndscpNav';
       /* prttNav mode 
       this.props.activeMenu ===*/
        return (
            <div id={navId} style={{fontSize:this.props.size}}>
                <nav className='sns-group'>
                    <a className='menu left' href='https://www.linkedin.com/in/zhen-jia/' target='_blank' title='linkedin'>
                        {showIcon===true ? <Icon icon='linkedin' />: null}
                    </a>
                    <a className='menu left' href='https://github.com/lizzyQ' target='_blank' title='github'>
                        {showIcon===true ? <Icon icon='github' />: null}
                    </a>
                    <a className='menu left' href='https://codepen.io/lizzyQ/' target='_blank' title='codepen'>
                        {showIcon===true ? <Icon icon='codepen' />: null}
                    </a>
                    <a className='menu left' href='https://twitter.com/liz_j_z' target='_blank' title='twitter'>
                        {showIcon===true ? <Icon icon='twitter' />: null}
                    </a>
                    <a className='menu left' href='mailto:lizwebdesign@fox.com' target='_blank' title='e-mail'>
                        {showIcon===true ? <Icon icon='envelop' />: null}
                    </a>
                </nav>
                {showIcon===true ? null: (<div className='activeM'>{this.props.activeMenu}</div>)}
                <nav className='nav-group'>
                    <a className='menu right' onClick={() => this.props.navChange('resume')} title='resume'>
                        {showIcon===true ? <Icon icon='briefcase' />: null}
                    </a>
                    <a className='menu right' onClick={() => this.props.navChange('home')} title='home'>
                        {showIcon===true ? <Icon icon='home' />: null}
                    </a>
                    <a className='menu right' onClick={() => this.props.projectsList()} title='projects'>
                        {showIcon===true ? <Icon icon='folder-plus' />: null}
                    </a>
                </nav>
               
            </div>
        );
   }
}

export default Nav;