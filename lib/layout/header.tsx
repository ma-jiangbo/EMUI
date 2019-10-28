import React from "react";
import {scopeClassMaker} from "../utils/classNames";
import {classNames} from "../utils/classNames";

interface props extends React.HTMLAttributes<HTMLElement>{

}

const Header: React.FunctionComponent<props> = (props) => {
    const sc = scopeClassMaker('emui-layout');
    return (
        <div {...props} className={classNames(sc('header'), props.className)}>
            {props.children}
        </div>
    )
};

export default Header