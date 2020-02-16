import React from "react"

export const Form = (props: any) => {
    const {children} = props;
    return (
        <form key={props._id}
              onSubmit={props.handleSubmit}
              className='form'
              name="form">
            {children}
        </form>
    )
};