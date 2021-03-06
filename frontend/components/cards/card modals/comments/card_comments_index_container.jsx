import CardCommentsIndex from "./card_comments_index";
import { connect } from 'react-redux';
import { fetchAllCardComments } from "../../../../actions/comment_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments)
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchAllCardComments: (cardId) => dispatch(fetchAllCardComments(cardId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardCommentsIndex));