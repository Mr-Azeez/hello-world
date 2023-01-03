import React, { Component } from 'react';
import MemoComp from './MemoComp';
// import PureComp from './PureComp';
// import RegularComp from './RegularComp';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Azeez'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Azeez'
            })
        }, 2000)
    }
    
  render() {
    console.log('Parent Comp render')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
