import * as React from 'react';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';
//import CreateProjectComponent from '../pages/project/ProjectComponent'

interface IAppState {
    shouldShowModal: boolean;
}

export class ModalWindow extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            shouldShowModal: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    public render(): JSX.Element {
        const modalStyle: ICustomModalStyle = {
            animationTime: 400,
            closeButtonText: {
                color: 'white'
            },
            hoveredButtonText: {
                fontWeight: 'bold'
            },
            modalHeader: {
                backgroundColor: '#268ef8'
            },
            modalTitle: {
                color: 'white',
                fontFamily: 'Montserrat'
            },
            modalBody:{
                backgroundColor: '#2b2d3c',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#ffffff'
            }
        };
        return (
            <div>
                <Modal
                    closeModal={this.closeModal}
                    customStyle={modalStyle}
                    shouldShowModal={this.state.shouldShowModal}
                    title="Create project"
                >
                    {/*<CreateProjectComponent/>*/}
                </Modal>
                <button className={'button button--hovered'} onClick={this.openModal}>Add +</button>
            </div>
        );
    }

    private closeModal(): void {
        this.setState({ shouldShowModal: false });
    }

    private openModal(): void {
        this.setState({ shouldShowModal: true });
    }
}