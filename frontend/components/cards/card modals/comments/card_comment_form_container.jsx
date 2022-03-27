import CardCommentForm from "./card_comment_form";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id
    }
}


export default withRouter(connect(mapStateToProps)(CardCommentForm));