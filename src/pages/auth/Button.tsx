import React from "react"

export const Button = (props: any) => {
    const {children} = props;
    return (
        <button type='submit'
                className='button button--hovered'
                name="button">
            {children}
        </button>
    )
};