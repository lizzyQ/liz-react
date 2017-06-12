import React, { Component } from 'react';
import Nav from './Components/Nav';
import Scene from './Components/Scene';
import Lframe from './Components/Lframe';
import Rframe from './Components/Rframe';
import Mframe from './Components/Mframe';
import PrjList from './Components/PrjList'
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = ({
          activeMenu: "home",
          centerFrame: 0,
          totalFrame: 22,
          leftFrame: 22,
          rightFrame: 1,  
          
          leftStyle: 'none',
          centerStyle: 'none',
          rightStyle: 'none',

          orientation: null,
          size:null,

          showList:false
    });

    this.resizeApp=this.resizeApp.bind(this);
  }

   componentDidMount(){
       this.trackSizeChange(); 
   }   
   
   trackSizeChange(){
        //site structure and content based on orientation 
        let orientation= window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
        let size = orientation==='portrait' && window.innerWidth > 590 ? '100%' : 
                   orientation==='portrait' && window.innerWidth <= 590 && window.innerWidth > 450? '85%' :
                   orientation==='portrait' && window.innerWidth <= 450 ? '60%':
                   orientation==='landscape' && window.innerWidth > 750 ? '100%':
                   orientation==='landscape' && window.innerWidth <= 670 && window.innerWidth > 450? '85%' :
                   orientation==='landscape' && window.innerWidth <= 450 ? '60%':'80%';

        this.setState({ orientation:orientation, size:size });

        window.addEventListener('resize', this.resizeApp);
    }

    resizeApp(){
        let width = window.innerWidth,
            height = window.innerHeight,
            orientation = this.state.orientation,
            size =this.state.size, 
            currentO, currentS;
        
        if(width > height){
            currentO = 'landscape'; 
            currentS = width > 750? '100%': '90%';
 
        }else if(width <= height ){
            currentO = 'portrait';
            currentS = width > 590 ? '100%': width>450 && width<=590 ? '85%': '60%';
        }

        if(orientation !== currentO){
            this.setState({orientation:currentO});   
        } 
        if(size !== currentS){
            this.setState({size:currentS}); 
        }  
                      
}

componentWillUnmount(){
    window.removeEventListener('resize',this.resizeApp);
}


handleNavChange(nav){
    let activeMenu = nav,
        mainF = this.state.centerFrame,
        leftF = this.state.leftFrame,
        rightF = this.state.rightFrame,
        totalF = this.state.totalFrame;

    if(activeMenu === 'home'){
      mainF = 0;
      leftF = totalF;
      rightF = 1;
    }else if(activeMenu === 'resume'){
      mainF = totalF;
      leftF = totalF - 1;
      rightF = 0;
    }

    this.setState({ 
      activeMenu: activeMenu,
      centerFrame: mainF,
      leftFrame:leftF,
      rightFrame:rightF,

      leftStyle: 'none',
      centerStyle: 'none',
      rightStyle: 'none',
    });
 }


handleFrameChange(dir){
    let totalF = this.state.totalFrame,
        mainF = this.state.centerFrame,
        leftF = this.state.leftFrame,
        rightF = this.state.rightFrame,
        leftStyle, centerStyle, rightStyle;
 
  if(dir==='l'){
       // 0 1 2 =>22 0 1 to the Right
        rightF = mainF;
        mainF = leftF;
        leftF = leftF===0 ? totalF : leftF - 1;
    
        leftStyle = 'slideInRight 0.5s ease-in-out';
        centerStyle = 'scaleR 0.4s ease-in-out';
        rightStyle = 'slideRight 0.5s ease-in-out';  
   
  }else if(dir==='r'){
       // 22 0 1 => 0 1 2 to the Left
    leftF = mainF;
    mainF = rightF;
    rightF = rightF===totalF? 0: rightF + 1;
   
    leftStyle = 'slideInLeft 0.5s ease-in-out';
    centerStyle = 'scaleL 0.4s ease-in-out';
    rightStyle = 'slideLeft 0.5s ease-in-out';

  }

  let activeMenu;

  if (mainF ===0){
     activeMenu='home';
  }else if(mainF === totalF){
     activeMenu='resume';      
  }else{
      activeMenu='projects';
  }
  
   this.setState({
          leftFrame: leftF,
          centerFrame: mainF,
          rightFrame: rightF,

          leftStyle: leftStyle,
          centerStyle: centerStyle,
          rightStyle: rightStyle,
          activeMenu: activeMenu,
      });
}

toggleList(){
 let isShowing = this.state.showList;
 let show = isShowing ? false : true;
 this.setState({showList:show});
}

handleList(idx){
    let totalF = this.state.totalFrame,
        mainF = idx + 1,
        leftF = mainF === 0 ? totalF : mainF - 1,
        rightF = mainF === totalF ? 0 : mainF + 1;
     
    this.setState({ 
      activeMenu: "projects",
      centerFrame: mainF,
      leftFrame:leftF,
      rightFrame:rightF,

      leftStyle: 'none',
      centerStyle: 'none',
      rightStyle: 'none',
      
      showList:false,
    });

}

render() {
    return (
      <div className="App" style={{fontSize:this.state.size}}>
            <Scene clicked={this.handleFrameChange.bind(this)} orientation={this.state.orientation}>
                <div name={this.state.leftFrame} style={{animation:this.state.leftStyle}}>
                    <Lframe frameN={this.state.leftFrame} 
                            orientation={this.state.orientation}  />
                </div>
                <div name={this.state.centerFrame} style={{animation:this.state.centerStyle}}>
                    <Mframe frameN={this.state.centerFrame} 
                            orientation={this.state.orientation} />
                </div>
                <div name={this.state.rightFrame} style={{animation:this.state.rightStyle}}>
                    <Rframe frameN={this.state.rightFrame}  
                            orientation={this.state.orientation} />
                </div>
            </Scene>
               
           <Nav activeMenu={this.state.activeMenu} 
                navChange={this.handleNavChange.bind(this)}
                projectsList={this.toggleList.bind(this)}
                orientation={this.state.orientation}
                size={this.state.size}
             />
           { this.state.showList ? (
               <PrjList selectList={this.handleList.bind(this)} 
                        orientation={this.state.orientation}
                        closeList={this.toggleList.bind(this)} /> 
                        ) : null }
      </div>
    );
  }
}

export default App;
