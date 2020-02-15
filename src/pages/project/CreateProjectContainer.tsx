import React, {Component} from "react"
import axios from 'axios';

axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU';
axios.defaults.headers.post['content-Type'] = 'application/json';

interface IState {
    createProject?: object,
    title?: string,
    company?: string,
    cost?: string,
    deadline?: string,
    assigned?: string,
}

interface IProps {
    title?: object,
    company?: object,
    cost?: object,
    deadline?: object,
    assigned?: object,
}

export default class CreateProjectContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            createProject: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: {
        target: {
            name: string;
            value: string;
        };
    }) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    createNewProject() {
        axios.post(`${axios.defaults.baseURL}/api/projects/`, {
            title: this.state.title,
            company: this.state.company,
            cost: this.state.cost,
            deadline: this.state.deadline,
            assigned: this.state.assigned,
        })
            .then(response => response.data)
            .then((data: object) => {
                this.setState({
                    createProject: data,
                });
            })
            .catch((error: string) => {
                console.error(error);
            });
    }

    handleSubmit(event: {
        preventDefault: () => void;
    }) {
        event.preventDefault();
        this.createNewProject();
    }

    render() {
        return (
            <div className={'modal__form-block'}>
                <form className={'createProjectForm'} key={this.state.assigned}
                      onSubmit={this.handleSubmit}>
                    <label className='createProjectForm__item'>
                    <span className='createProjectForm__title'>
                        Title
                    </span>
                        <input
                            required
                            type="text"
                            name='title'
                            value={this.state.title}
                            placeholder="Title"
                            onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                    <span className='createProjectForm__title'>
                        Company
                    </span>
                        <input
                            required
                            type="text"
                            name='company'
                            value={this.state.company}
                            placeholder=" Company"
                            onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                    <span className='createProjectForm__title'>
                        Cost
                    </span>
                        <input
                            required
                            type="text"
                            name='cost'
                            value={this.state.cost}
                            placeholder="Cost"
                            onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                    <span className='createProjectForm__title'>
                        Deadline
                    </span>
                        <input
                            required
                            type="text"
                            name='deadline'
                            value={this.state.deadline}
                            placeholder="Deadline"
                            onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                    <span className='createProjectForm__title'>
                        Assigned
                    </span>
                        <input
                            required
                            type="text"
                            name='assigned'
                            value={this.state.assigned}
                            placeholder="Assigned"
                            onChange={this.handleChange}/>
                    </label>

                    <button
                        className='button createProjectForm__button button--hovered'
                        type='submit'>
                        OK
                    </button>
                </form>
            </div>
        )
    }
}


