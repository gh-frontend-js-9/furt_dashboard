import React from "react"

export const NameInput = (props: any) => {
    return (
        <input key={props._id}
               required
               className="input"
               type="text"
               name='name'
               placeholder="Name"
               value={props.name}
               onChange={props.handleChange}/>
    )
};