import React from "react";
import '../asset/icon/wechat.svg'

interface IconProps {
    name: string
}

const  Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};

export default Icon