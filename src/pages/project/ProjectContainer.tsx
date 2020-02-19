import React, {Component} from "react"
import axios from 'axios';
import CardCreatedProjectComponent from './CardCreatedProjectComponent'
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
    }

    render() {
        const project = this.state.allProject.map((project: any) =>
            <CardCreatedProjectComponent {...project} key={project._id}/>);
        return (
            <>
                {this.state.loading ? <Loading/> : project}
            </>
        )
    }
}

