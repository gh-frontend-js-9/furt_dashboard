import React, {Component} from "react"

interface TypeProps {
    title?: object,
    company?: object,
    cost?: any,
    deadline?: any,
    assigned?: any,
}

interface TypeState {
    createProject?: any,
    title?: any,
    company?: any,
    cost?: any,
    deadline?: any,
    assigned?: any,
}

export default class CreateProjectContainer extends Component <TypeProps, TypeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            createProject: [],
            title: '',
            company: '',
            cost: '',
            deadline: '',
            assigned: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: {
        target: {
            name: any;
            value: any;
        };
    }) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    createNewProject() {
        let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/projects/';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                company:this.state.company,
                cost:this.state.cost,
                deadline:this.state.deadline,
                assigned: this.state.assigned,
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
    handleSubmit(event: {
        preventDefault: () => void;
    }) {
        event.preventDefault();
        this.createNewProject();

    }
    render() {
        return (
            <div className={'modal__form-block'}>
            <form className={'form'} key={this.state.assigned} onSubmit={this.handleSubmit}>
                <label className='form__item'>
                    <span className='form__title'>
                        Title
                    </span>
                    <input
                        required
                        type="text"
                        name = 'title'
                        value={this.state.title}
                        placeholder="Title"
                        onChange={this.handleChange} />
                </label>

                <label className='form__item'>
                    <span className='form__title'>
                        Company
                    </span>
                    <input
                        required
                        type="text"
                        name = 'company'
                        value={this.state.company}
                        placeholder=" Company"
                        onChange={this.handleChange} />
                </label>

                <label className='form__item'>
                    <span className='form__title'>
                        Cost
                    </span>
                    <input
                        required
                        type="text"
                        name = 'cost'
                        value={this.state.cost}
                        placeholder="Cost"
                        onChange={this.handleChange} />
                </label>

                <label className='form__item'>
                    <span className='form__title'>
                        Deadline
                    </span>
                    <input
                        required
                        type="text"
                        name = 'deadline'
                        value={this.state.deadline}
                        placeholder="Deadline"
                        onChange={this.handleChange} />
                </label>

                <label className='form__item'>
                    <span className='form__title'>
                        Assigned
                    </span>
                    <input
                        required
                        type="text"
                        name = 'assigned'
                        value={this.state.assigned}
                        placeholder="Assigned"
                        onChange={this.handleChange} />
                </label>

                <button
                    className='button form__button button--hovered'
                    type='submit'>
                    Submit
                </button>
            </form>
            </div>
        )
    }
}

