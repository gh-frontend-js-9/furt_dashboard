import React, {Component} from "react"
import ProjectComponent from './ProjectComponent'

interface TypeProps {
    title?: object,
    company?: object,
    cost?: object,
    status?: object,
    deadline?: object,
    progress?: object,
    name?: any,
    position?: any,
    assigned?: any
}

interface TypeState {
    allProject?: any
}

export default class ProjectContainer extends Component <TypeProps, TypeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            allProject: [],
        }
    }

    componentDidMount() {
        let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/projects/';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allProject: data
                });
            })
            .catch((error: any) => {
                console.error(error);
            });
    }

    render() {
        const project = this.state.allProject.map((project: any) =>
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

