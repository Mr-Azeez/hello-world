import React from 'react';

const Hello = props => {
    const {fullName, nickName} = props
    return (
        <div>
            <h1>My name is {fullName} also known as {nickName} </h1>
        </div>
    )
//    return React.createElement(
//     'div', 
//     {id: 'hello', className: 'dummyClass'}, 
//     React.createElement('h1', null, 'Hello Azeez'))
}

export default Hello;