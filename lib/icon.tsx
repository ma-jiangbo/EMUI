import React from "react";
import '../asset/icon/wechat.svg'
import './style/icon.sass'

interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='icon-wrap'>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
};

export default Icon