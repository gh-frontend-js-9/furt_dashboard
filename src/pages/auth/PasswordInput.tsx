import React from "react"

export const PasswordInput = (props: any) => {
    return (
        <input key={props.id}
               className="input"
               type="password"
               name='password'
               placeholder="Password"
               value={props.password}
               onChange={props.handleChange}/>
    )
};