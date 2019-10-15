import React from "react";
import '../../asset/icon/wechat.svg'
import './icon.sass'
import classes from '../utils/classNames'

interface IconProps extends React.SVGAttributes<SVGElement> {
    //
}

const Component: React.FunctionComponent<IconProps> = ({className, name, ...props}) => {
    return (
        <svg {...props} className={classes('asset-wrap', className)}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
};

export default Component