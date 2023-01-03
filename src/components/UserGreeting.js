import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome Azeez</div>

    // return this.state.isLoggedIn ? (
    //     <div>Welcome Azeez</div>
    // )  :    ( 
    //     <div>Welcome Guest</div>
    // )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Azeez</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return <div>Welcome Azeez</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }
//     return (
//       <div>
//         <div>Welcome Azeez</div>
//         <div>Welcome Guests</div>
//       </div>
//     );
  }
}

export default UserGreeting;
