import React from "react";
import {scopeClassMaker} from "../utils/classNames";
import {classNames} from "../utils/classNames";

interface props extends React.HTMLAttributes<HTMLElement>{

}

const Content: React.FunctionComponent<props> = (props) => {
    const sc = scopeClassMaker('emui-layout');
    return (
        <div {...props} className={classNames(sc('content'), props.className)}>
            {props.children}
        </div>
    )
};

export default Content