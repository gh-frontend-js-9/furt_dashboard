import React from "react"

export const EmailInput = (props: any) => {
    return (
        <input key={props._id}
               className="input"
               type="email"
               name='email'
               placeholder="Email"
               value={props.email}
               onChange={props.handleChange}/>
    )
};