import React from 'react';

function Header() {
    return (
        <header style={headerStyle} >
            <h1>React Todo List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#FFF',
    textAlign: 'center',
    padding: '10px'
}

export default Header;