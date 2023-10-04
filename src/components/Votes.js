import React, {useState} from 'react'

function Votes({upvotes, downvotes}) {
    let [countUpvotes, setCountUpvotes] = useState(upvotes)
    let [countDownvotes, setCountDownvotes] = useState(downvotes)
    
    function handleVoteClick(e) {
        if(e.target.id === 'upBtn') {
            setCountUpvotes(countUpvotes += 1)
        }
        else if (e.target.id === 'downBtn') {
            setCountDownvotes(countDownvotes += 1)
        }
    }
    
    return (
    <>
        <button onClick={handleVoteClick}
                id='upBtn'>
                    {countUpvotes} 👍
        </button>
        <button onClick={handleVoteClick}
                id='downBtn'>{countDownvotes} 👎</button>
    </>
    )
}

export default Votes