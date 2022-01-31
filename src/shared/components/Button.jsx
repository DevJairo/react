import React from 'react'

const Button = (props) => {
    return (
        <div>
            {props.show ? (
                <button className={"position-relative btn btn-primary "+ props.block +' '+ props.size} type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true"></span>
                    <span style={{visibility: "hidden"}}>{props.loading}</span>
                </button>
            ) : (
                <button disabled={props.disabled} onClick={ ()=> props.click ? props.click() : '' } className={"position-relative btn btn-primary "+ props.block +' '+ props.size}><span>{props.text}</span></button>
            )}

        </div>
    )
}

export default Button