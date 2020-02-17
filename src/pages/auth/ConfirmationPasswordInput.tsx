import React from "react"

export const ConfirmationPasswordInput = (props: any) => {
    return (
        <input key={props.id}
               className="input"
               type="password"
               name='confirmationPassword'
               placeholder="Confirmation password"
               value={props.confirmationPassword}
               onChange={props.handleChange}/>
    )
};