import React, {useState} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import './demo.scss'

interface props {
    code: string,
    describe?: string
}

const Demo: React.FunctionComponent<props> = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className='emui-component-demo'>
            <div className='emui-component-demo-preview'>
                {props.children}
            </div>
            <div className="emui-component-demo-desc">
                <p>{props.describe}</p>
                <button onClick={() => setVisible(!visible)}>{'<>'}</button>
            </div>

            {visible && (<div className='emui-component-demo-code'>
                    <Highlight {...defaultProps} code={props.code} language='jsx'>
                        {({className, style, tokens, getLineProps, getTokenProps}) => (
                            <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({line, key: i})}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({token, key})}/>
                                ))}
                            </div>
                        ))}
                    </pre>
                        )}
                    </Highlight>

                </div>
            )}
        </div>
    )
};

export default Demo;