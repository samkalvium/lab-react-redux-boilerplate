import React from 'react'
import { connect } from 'react-redux';
import { incrementLike } from './Actions';
import { decrementLike } from './Actions';
import '../App.css'


function LikeCounter(props) {
    return (
        <div className='container'>
            <h1>Like Counter</h1>
            <h1>{props.likes}</h1>
            <button onClick={props.incrementLike} className='like'>Like</button>
            <button onClick={props.decrementLike} className='unlike'>Unlike</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        likes: state.likes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementLike: () => dispatch(incrementLike()),
        decrementLike: () => dispatch(decrementLike())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeCounter)
