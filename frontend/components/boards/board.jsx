import React from 'react';
import MainNavBar from '../navbars/mainNavBar/main_nav_bar';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchWorkspaceBoard(parseInt(this.props.boardId))
        debugger
    }

    render() {
        debugger
        if (!this.props.board) {
            return <p>loading!!</p>
        }

        debugger
        return (
            <>
                <div className="board">
                    <MainNavBar />
                    <h2>{this.props.board.title}</h2>
                    <button>+ Add a list</button>
                </div>
            </>
        )
    }

}

export default Board;