import React, {ReactElement} from "react";
import {scopeClassMaker, classNames} from "../utils/classNames";
import './layout.scss'
import Sider from "./sider";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

interface props extends React.HTMLAttributes<HTMLElement>{
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<props> = (props) => {
    const sc = scopeClassMaker('emui-layout');
    const children = props.children as Array<ReactElement>;
    const hasSider = children.length &&
        children.reduce((result, node) => result || node.type === Sider, false);
    return (
        <div {...props} className={classNames(sc(), props.className, hasSider ? 'emui-sider-layout' : '')}>
            {props.children}
        </div>
    )
};

export default Layout
export { Header, Content, Sider, Footer }