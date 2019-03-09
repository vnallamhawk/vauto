import React from 'react';

const input=(props)=>{
    return(
        <>
            <input name={props.name} type={props.type} value={props.value} onClick={props.onClick} onChange={props.onChange}/>
        </>
    )
}

export default input;