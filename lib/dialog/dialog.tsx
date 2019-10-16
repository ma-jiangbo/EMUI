import React, {Fragment, ReactElement, ReactEventHandler} from "react";
import ReactDom from 'react-dom'
import { Icon } from '../index'
import './dialog.scss'
import {scopeClassMaker} from "../utils/classNames";

interface props {
    visible: boolean,
    buttons: Array<ReactElement>,
    onClose: ReactEventHandler,
    maskClosable?: boolean
}

const Dialog: React.FunctionComponent<props> = (props) => {

    const sc = scopeClassMaker('emui-dialog');
    const closeDialog:ReactEventHandler = e => props.onClose(e);
    const maskClickClose: ReactEventHandler = e => {
        props.maskClosable !== false && props.onClose(e)
    };

    return ReactDom.createPortal(props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={maskClickClose}/>
            <div className={sc()}>
                <div className={sc('close')} onClick={closeDialog}>
                    <Icon name="close" />
                </div>
                <header className={sc('header')}>
                    title
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    {props.buttons}
                    {/*<button>ok</button>*/}
                    {/*<button>cancel</button>*/}
                </footer>
                </div>
        </Fragment>
        :
        null, document.body)
};

export default Dialog