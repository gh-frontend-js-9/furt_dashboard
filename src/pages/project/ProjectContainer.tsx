import React, {Component} from "react"
import axios from 'axios';
import ProjectComponent from './ProjectComponent'

axios.defaults.baseURL = `https://geekhub-frontend-js-9.herokuapp.com`;

interface IProps {
    title?: object,
    company?: object,
    cost?: object,
    status?: object,
    deadline?: object,
    progress?: object,
    name?: object,
    position?: object,
    assigned?: object,
}
interface IState {
    allProject?: any,
}
export default class ProjectContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            allProject: [],
        }
    }

    componentDidMount() {
            axios.get(`${axios.defaults.baseURL}/api/projects/`)
                .then(response => response.data)
                .then(data => {
                    this.setState({
                        allProject: data
                    });
                })
                .catch((error: string) => {
                    console.error(error);
                });
    }

    render() {
        const project = this.state.allProject.map((project:any) =>
            <ProjectComponent
                key={project._id}
                title={project.title}
                company={project.company}
                cost={project.cost}
                status={project.status}
                deadline={project.deadline}
                progresss={project.progress}
                assigned={project.assigned}
            />);
        return (
            <>{project}</>
        )
    }
}

