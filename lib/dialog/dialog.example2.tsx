import React from 'react'
import {alert, confirm } from "../index";

export default function () {
    return (
        <div className='emui-dialog-example2'>
            <div>
                <button onClick={() => {alert('warning content !')}}>alert</button>
            </div>
            <div>
                <button onClick={
                    () => {confirm('are you sure ?', () => {console.log('ok')}, () => {console.log('cancel')})}
                }>confirm</button>
            </div>
        </div>
    )

};
