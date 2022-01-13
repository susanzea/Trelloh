import ListIndexItem from './list_index_item'
import { connect } from 'react-redux';
import { destroyList } from '../../actions/list_actions'
import { fetchAllListCards, destroyCard } from '../../actions/card_actions'

const mapStateToProps = (state, ownProps) => {
    const getListCard = (listId) => {
        return Object.values(state.entities.cards).filter(card =>
            card.list_id === listId
        )
    }

    return {
        cards: getListCard(ownProps.list.id),
        listId: ownProps.list.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        destroyCard: (cardId) => dispatch(destroyCard(cardId)),
        destroyList: (listId) => dispatch(destroyList(listId)),
        fetchAllListCards: (listId) => dispatch(fetchAllListCards(listId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndexItem);
