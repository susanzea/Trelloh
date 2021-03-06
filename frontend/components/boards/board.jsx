import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import MainNavBar from '../navbars/mainNavBar/main_nav_bar_container';
import ListIndex from '../lists/list_index';
import BoardTitleForm from './board_title_form';
import { prefetch } from 'webpack';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.handleBoardDelete = this.handleBoardDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkspaceBoard(parseInt(this.props.boardId))
        .then(() => this.props.fetchUserWorkspace(parseInt(this.props.board.workspace_id)))
    }

    // componentDidUpdate(prevProps) {
    //      if (this.props.board && (prevProps.workspace[0] === this.props.workspace[0])) {
    //         this.props.fetchUserWorkspace(parseInt(this.props.board.workspace_id))
    //     }
        
    // }

    handleBoardDelete() {
        this.props.history.push(`/workspaces/${this.props.board.workspace_id}/boards`)
        this.props.destroyBoard(this.props.boardId);
        // TODO: after you get access to workspace, redirect to workspace show page that this board was on
        // const location = this.props.history.location.pathname
        // this.props.history.push(`/workspaces/${this.props.board.workspace_id}/boards`)
    }



    render() {
        // console.log(this.props.workspace)
        if (!this.props.board) {
            return <p>loading!!</p>
        }

        // console.log(this.props.workspace.length !== 0 ? this.props.workspace.filter(ws => this.props.board.workspace_id === ws.id)[0].id : "no ws")

        return (
            <>
                <div className="board">
                    <MainNavBar />
                    <div className='board-header'>
                        <BoardTitleForm 
                            board={this.props.board} 
                            editBoard={this.props.editBoard}
                        />
                        <Link
                            id='board-workspace-title'
                            to={`/workspaces/${this.props.workspaces.length !== 0 ? 
                                    this.props.workspaces.filter(ws => this.props.board.workspace_id === ws.id)[0].id 
                                    : "error"}/boards`
                                }
                        >
                            {this.props.workspaces.length !== 0 ? this.props.workspaces.filter(ws => this.props.board.workspace_id === ws.id)[0].title : "no ws"}
                        </Link>
                        {/* <p id='board-workspace-title'>{this.props.workspace.length !== 0 ? this.props.workspace.filter(ws => this.props.board.workspace_id === ws.id)[0].title : "no ws"}</p> */}
                        <button 
                            id='delete-board'
                            onClick={this.handleBoardDelete}
                        >
                            <img src={window.delete_board} alt="delete board icon" />
                        </button>
                    </div>                    
                    <ListIndex
                    lists={this.props.lists}/>
                </div>
            </>
        )
    }

}

export default Board;