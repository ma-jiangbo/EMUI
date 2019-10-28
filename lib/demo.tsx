import React from 'react';

interface props {
    code: string
}
const Demo: React.FunctionComponent<props> = (props) => {
    return (
        <div>
            {props.children}
            <pre>
                {props.code}
            </pre>
        </div>
    )
};

export default Demo;