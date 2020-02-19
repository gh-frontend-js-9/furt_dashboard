import * as React from 'react';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';
import CreateNewProjectContainer from './project/CreateNewProjectContainer'

interface IState {
    isOpen: boolean;
}

export class ModalWindow extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    public render(): JSX.Element {
        const modalStyle: ICustomModalStyle = {
            animationTime: 400,
            closeButtonText: {
                color: '#ffffff'
            },
            hoveredButtonText: {
                fontWeight: 'bold'
            },
            modalHeader: {
                backgroundColor: '#268ef8'
            },
            modalTitle: {
                color: '#ffffff',
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
                    closeModal={() => this.closeModal()}
                    customStyle={modalStyle}
                    shouldShowModal={this.state.isOpen}
                    title="Create project"
                >
                    <CreateNewProjectContainer/>
                </Modal>
                <button className={'button button--hovered'} onClick={() =>this.openModal()}>
                    Add +
                </button>
            </div>
        );
    }

    private closeModal(): void {
        this.setState({ isOpen: false });
    }

    private openModal(): void {
        this.setState({ isOpen: true });
    }
}