import React from "react";

export  const Title:React.FC = () =>{
    return (
        <div className='title'>
            <p className='title__item'>
                Project title
            </p>
            <td className='title__item'>
                Value
            </td>
            <p className='title__item'>
                Deadline
            </p>
            <p className='title__item'>
                Progress
            </p>
            <p className='title__item'>
                Status
            </p>
            <p className='title__item'>
                Assigned to
            </p>
        </div>
    );
};


