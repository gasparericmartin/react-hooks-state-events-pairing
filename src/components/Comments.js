import React, {useState} from 'react'

function Comments({comments}) {
    let [toggleComments, setToggleComments] = useState('Hide Comments')

    function handleCommentClick(e) {
        if(toggleComments === 'Hide Comments') {
            setToggleComments(toggleComments = 'Show Comments')
        }
        else {
            setToggleComments(toggleComments = 'Hide Comments')
        }
    }
    return (
<>
    <div className='Comments'>
        <button onClick={handleCommentClick}>{toggleComments}</button>
    </div>
    <h2>{comments.length} Comments</h2>
    {comments.map(comment => {
        if(toggleComments === 'Hide Comments') {
            return (
                <>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
                </>
            )
        }
        else {
            return null
        }

    })}
</>
)}


export default Comments