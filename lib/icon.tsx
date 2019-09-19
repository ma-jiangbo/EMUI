import React from "react";
import '../asset/icon/wechat.svg'
import './style/icon.sass'
import classes from  '../utils/classNames'

interface IconProps extends React.SVGAttributes<SVGElement>{
    //
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg {...props} className={classes('icon-wrap', props.className)}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
};

export default Icon