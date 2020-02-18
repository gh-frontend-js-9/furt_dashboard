import React, {Component} from "react"
import axios from 'axios';
import ProjectComponent from './ProjectComponent'
import Loading from './Loading'

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
    loading?: boolean
}

export default class ProjectContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            allProject: [],
            loading: true,
        }
    }

    componentDidMount() {
        localStorage.getItem('token');
        axios({
            method: 'get',
            url: `${axios.defaults.baseURL}/api/projects/`,
            headers: {
                'x-access-token': localStorage.token,
            }
        })
            .then(response => response.data)
            .then(data => {
                this.setState({
                    allProject: data,
                    loading: false,
                });
            })
            .catch((error: string) => {
                console.error(error);
            });
        console.log(localStorage)
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
                progress={project.progress}
                assigned={project.assigned}
            />);
        return (
            <>
                {this.state.loading ? <Loading/> : project}
            </>
        )
    }
}

