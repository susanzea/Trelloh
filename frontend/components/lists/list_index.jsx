import React from 'react';
import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from '../lists/list_form_container';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <ul className='list-index'>
            {
                this.props.lists.map((list, idx) => {
                    return <ListIndexItemContainer
                        key={list.id}
                        list={list}
                    />
                })
            }
            <li><ListFormContainer totalBoardLists={this.props.lists.length} /></li>
        </ul>
        )
    }

}

export default ListIndex;