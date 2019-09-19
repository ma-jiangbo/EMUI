import React from "react";
import '../asset/icon/wechat.svg'
import './style/icon.sass'
import classes from  '../utils/classNames'

interface IconProps extends React.SVGAttributes<SVGElement>{
    //
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps} = props;
    return (
        <svg {...restProps} className={classes('icon-wrap', className)}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
};

export default Icon