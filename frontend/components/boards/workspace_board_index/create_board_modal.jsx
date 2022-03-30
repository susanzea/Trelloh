import React, {useState} from 'react';
import { render } from 'react-dom';

class CreateBoardModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            workspace_id: props.workspaceId
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state);
        this.props.openCreateBoardModal(false);
    }


    render() {
        const titleRequiredNotification = () => {
            if (this.state.title === '') {
                return <p>👋 Board title is required</p>
            }
        }

        return (
            <div className='create-board-modal'>
                <button className='close-create-board-modal' 
                    onClick={() => this.props.openCreateBoardModal(false)}
                >✕</button>

                <form className='create-board-form'
                    onSubmit={this.handleSubmit}
                >
                    <input type="text"
                        id='create-board-form-input' 
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    {titleRequiredNotification()}
                    
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }
}

export default CreateBoardModal;