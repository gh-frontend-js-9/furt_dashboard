import React from "react"
import {Line} from "rc-progress";

const ProjectComponent = (props: any) => {
    return (
        <div className='project-container' key={props._id}>
            <div className='project-container__item'>
                {props.title}
                <p className='project-container__subparagraph'>
                    {props.company}
                </p>
            </div>
            <div className='project-container__item'>
                {props.cost}
            </div>
            <div className='project-container__item'>
                {props.deadline.slice(0, 10)}
            </div>
            <div className='project-container__item'>
                {props.progresss} %
                {props.progresss === 0 &&
                <Line percent={props.progresss} trailColor='#D3D3D3' strokeColor="#D3D3D3"/>
                }
                {props.progresss === 100 &&
                <Line percent={props.progresss} strokeColor="#4caf50"/>
                }
                {props.progresss > 0 && props.progresss < 100 &&
                <Line percent={props.progresss} strokeColor="#2196f3"/>
                }
            </div>
            <div className='project-container__item'>
                {props.status}
            </div>
            <div className='project-container__item'>
                <div className={'project-container__assigned'}>
                    <div>
                        <i className='fa fa-user-secret fa-assigned fa-2x'>
                        </i>
                    </div>
                    <div>
                        {props.assigned ? props.assigned.name : "Djon"
                        }
                        <p className={'project-container__subparagraph'}>
                            {props.assigned ? props.assigned.position : "Frontend Developer"
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectComponent