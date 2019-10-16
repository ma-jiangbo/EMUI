import React, {Fragment} from "react";
import './dialog.scss'

interface props {
    visible: boolean
}

const Dialog: React.FunctionComponent<props> = (props) => {
    return props.visible ?
        <Fragment>
            <div className='emui-dialog-mask'/>
            <div className="emui-dialog">
                <header>
                    title
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <button>ok</button>
                    <button>cancel</button>
                </footer>
                </div>
        </Fragment>
        :
        null
};

export default Dialog