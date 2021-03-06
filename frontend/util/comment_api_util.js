export const getAllCardComments = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/cards/${cardId}/comments`
    })
}

export const getCardComment = (commentId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/comments/${commentId}`
    })
}

export const postComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: { comment }
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`,
        data: { commentId }
    })
}

export const patchComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
}

