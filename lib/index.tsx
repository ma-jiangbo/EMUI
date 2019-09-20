import React from 'react'
import ReactDom from 'react-dom'
import Component from './icon/icon'

const iconClick: React.MouseEventHandler = event => {
    console.log(event.target)
};

ReactDom.render(
    <div>
        <Component name='wechat' onClick={iconClick}/>
    </div>,
    document.getElementById('root')
);