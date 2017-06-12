import React, { Component } from 'react';
import './scene.css';

class Scene extends Component {
    render(){
      let fn = child =>
                   React.cloneElement(child, {
                      key: child.props.name,
                      style: child.props.style,
                 });
       let items = React.Children.map(this.props.children, fn);
       let containerName = this.props.orientation==='portrait'? 'prttContainer': 'lndscpContainer';
        return (
           <div id={containerName}>
                  <section onClick={this.props.clicked.bind(this, "l")}>
                    {items[0]}
                  </section>
                  <main>
                    {items[1]}
                  </main>
                  <section onClick={this.props.clicked.bind(this, "r")}>
                    {items[2]}
                  </section>
            </div>
        );
    }
}

export default Scene;