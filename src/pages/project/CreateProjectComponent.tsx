import React from "react"

const CreateProjectComponent = (props: any) => {
    return (
        <p>
            {props.title}
            {props.company}
            {props.cost}
            {props.deadline}
            {props.assigned}
        </p>
    );
};

export default CreateProjectComponent