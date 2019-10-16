import React, {useState} from 'react'
import Dialog from "./dialog";

export default function () {
    const [ visible, setVisible ] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>开启/关闭dialog</button>
            <Dialog visible={visible} >
                dialog content
            </Dialog>
        </div>
    )

}
