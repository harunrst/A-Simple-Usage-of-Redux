import React, { Component } from 'react'

export default class TweetListItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="row">
                <div className="col-md-1">
                    <img className="borderedImg" width="50" src="user.png" alt=""></img>
                </div>
                <div className="col-md-10 tUsr">
                    <h6>{item.user.name}<span style={{ fontWeight: "lighter" }} className="card-subtitle mb-2 text-muted"> @{item.user.screen_name} · {item.created_at}</span></h6>
                    <p>{item.text} </p>
                    <p className="card-subtitle mb-2 text-muted"><i className="fas fa-retweet"></i> {item.retweet_count} · <i className="far fa-heart"></i> {item.favorite_count}</p>
                </div>
                <div className="col-md-1">

                </div>
                <hr />
            </div>
        )
    }
}
