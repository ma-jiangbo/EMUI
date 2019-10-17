import React, {Fragment, ReactElement, ReactEventHandler, ReactNode} from "react";
import ReactDom from 'react-dom'
import {Icon} from '../index'
import './dialog.scss'
import {scopeClassMaker} from "../utils/classNames";

interface props {
    visible: boolean,
    buttons?: Array<ReactElement>,
    onClose: ReactEventHandler,
    maskClosable?: boolean,
    title?: string
}

const Dialog: React.FunctionComponent<props> = (props) => {

    const sc = scopeClassMaker('emui-dialog');
    const closeDialog: ReactEventHandler = e => props.onClose(e);
    const maskClickClose: ReactEventHandler = e => {
        props.maskClosable && props.onClose(e)
    };

    return ReactDom.createPortal(props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={maskClickClose}/>
            <div className={sc()}>
                <div className={sc('close')} onClick={closeDialog}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>
                    {props.title || ''}
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                {props.buttons &&
                <footer className={sc('footer')}>
                    {props.buttons}
                </footer>}
            </div>
        </Fragment>
        :
        null, document.body)
};

Dialog.defaultProps = {
    maskClosable: true
};

const alert = (content: string, onCancel?: () => void) => {
    const button = <button key={1} onClick={() => {
        api.close()
    }}>ok</button>;
    const api = modal(content, 'warning', [button], onCancel)
};

const confirm = (content: string, onOk?: () => void, onCancel?: () => void) => {
    const onYes = () => {
        api.close();
        onOk && onOk()
    };
    const onNo = () => {
        api.close();
        onCancel && onCancel()
    };
    const buttons = [
        <button key={1} onClick={onYes}>yes</button>,
        <button key={2} onClick={onNo}>no</button>
    ];

    const api = modal(content, 'confirm', buttons, onCancel)
};

const modal = (content: ReactNode, title?: string, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const closeModal = () => {
        ReactDom.render(React.cloneElement(component, {visible: false}), div);
        ReactDom.unmountComponentAtNode(div);
        div.remove()
    };
    const component = <Dialog title={title || "modal"} buttons={buttons}
    onClose={ () => {closeModal(); afterClose && afterClose() }}
    visible={true}> {content} </Dialog>;
    let div = document.createElement('div');
    document.body.append(div);
    ReactDom.render(component, div);
    return {
        close: closeModal
    }
};


export {alert, confirm, modal}
export default Dialog