import React from "react"

export const Button = (props: any) => {
    const {children} = props;
    return (
        <button type='submit'
                onClick={props.handleSubmit}
                className='button button--hovered'
                name="button">
            {children}
        </button>
    )
};