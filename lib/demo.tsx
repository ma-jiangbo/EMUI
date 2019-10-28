import React, {useState} from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";

interface props {
    code: string
}
const Demo: React.FunctionComponent<props> = (props) => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div>
                {props.children}
            </div>
            <div>
                <button onClick={() => setVisible(!visible)}>{'<>'}</button>
                {visible && (
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
                )}
            </div>

        </div>
    )
};

export default Demo;