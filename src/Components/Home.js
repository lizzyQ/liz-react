import React, { Component } from 'react';
import './home.css';


const preview={
    width: '200%',
    cursor: 'pointer',
    lineHeight: '2em',
    padding: '20% 5%',
    overflowX: 'hidden',
}

function Left(props) {
    return (
        <div style={props.preview ? preview : {flex:3}}>
            <div id={!props.preview && 'homeDisplay'}>
                <h2 id={!props.preview && 'slogan'}>NICE &#38; SIMPLE</h2>
                <h1 id={!props.preview && 'homeTitle'}>
                     <span>&#8249;</span>
                     LIZ JIA
                     <span>&#8250;</span>
                </h1>
                <h3>Web Designer <small> &#8759; </small> Front End Developer <small> &#8759; </small> Language Admire</h3>
            </div>

            <article id={!props.preview && 'homeIntro'}>
                <p>Hey, there. Welcome to my page.</p>
                <p>I am a web developer ᕙ(©¿©)ᕗ who enjoys hot water and petting furry animals, <br/>
                Also a passionate learner able to craft nice and simple web presents from scrach. &#10697; <br/>
                Currently, I am looking for an opportunite in portland, OR.
                To learn more about programming, to meet new friends, and to experience in the Tech industry.<br />
                Feel free to contact me for a nonprofit / open source project or casual chat. 
                <a href="mailto:lizwebdesign@fox.com" target="_blank"> E-mail me</a> OR link me in 
                <a href="https://www.linkedin.com/in/zhen-jia/" target="_blank"> linkedIn</a>. <br />
                Thank you &#9829; for the visiting.
                </p>
            </article>
       </div>
    );
}


const tags = ['Javascript', 'React', 'React Bootstrap', 
              'HTML5', 'CSS3', 'PhotoShop', 'REST Api', 'python','Django',
              'jQuery', 'Bootstrap', 'PHP', 'Wordpress'];

function Right(props) {
    let tagItems = tags.map( (ele,idx) => { return ( <li key={idx}> {ele} </li> ); } );
    return (
        <div style={props.preview ? preview : {flex:1}}>
            <ul id={!props.preview && 'tagList'}>
                {tagItems}
            </ul>
       </div>
    );
}

class Home extends Component {   
    render(){

        let renderer = this.props.renderer;
        let boxId = this.props.orientation ==='portrait' ? 'homeColume': 'homeRow';

        return (
            <div id={boxId}>
                { renderer==='left' || renderer==='whole' ? (<Left preview={renderer==='left' ? true : false} />) :  null }
                { renderer==='right' || renderer==='whole' ? ( <Right preview={renderer==='right' ? true : false} />) : null }
            </div>
        );
    }
}

export default Home;