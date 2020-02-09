import React, {Component} from "react"
import CreateProjectComponent from './CreateProjectComponent'

interface TypeProps {
    title?: object,
    company?: object,
    cost?: object,
    status?: object,
    deadline?: object,
    progress?: object,
}

interface TypeState {
    createProject?: any
}

class CreateProjectContainer extends Component <TypeProps, TypeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            createProject: [],
        }
    }

    componentDidMount() {
        let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/projects/';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: "Mobile app ",
                company: "Google",
                cost: "$3000",
                deadline: "2020-03-30",
                assigned: "5e1ee5f58067c30022524e22"
            }),
            headers: {
                'content-type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
            }
        })
            .then((response: { json: () => any; }) => response.json())
            .then((data: any) => {
                this.setState({
                    createProject: data
                });
                console.log(data)
            })
            .catch((error: any) => {
                console.error(error);
            });
    }

    render() {
        const project = this.state.createProject.map((project: any) =>
            <CreateProjectComponent
                key={project.assigned}
                title={project.title}
                company={project.company}
                cost={project.cost}
                deadline={project.deadline}
                assigned={Object.values(project.assigned)}
            />);
        return (
            <>{project}</>
        )
    }
}

export default CreateProjectContainer