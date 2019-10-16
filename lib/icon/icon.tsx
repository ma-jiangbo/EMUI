import React from "react";
// import '../../asset/icon/wechat.svg'
import './importAll'
import './icon.scss'
import classes from '../utils/classNames'

interface IconProps extends React.SVGAttributes<SVGElement> {
    //
}

const Component: React.FunctionComponent<IconProps> = ({className, name, ...props}) => {
    return (
        <svg {...props} className={classes('emui-icon-wrap', className)}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
};

export default Component