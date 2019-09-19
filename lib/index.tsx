import React from 'react'
import ReactDom from 'react-dom'
import Icon from './icon'

const iconClick: React.MouseEventHandler = event => {
    console.log(event.target)
};

ReactDom.render(
    <div>
        <Icon name='wechat' onClick={iconClick}/>
    </div>,
    document.getElementById('root')
);