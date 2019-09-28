import React, { Component } from 'react'
import { connect } from "react-redux";
import TweetListItem from "./TweetListItem";

class TweetList extends Component {
    render() {
        const { tweets, isLoading } = this.props;
        return (
            <div className="card tweet border-info">
                <div className="card-body">
                    <h5 className="card-title">Tweets based on your search
                    <i style={{ float: "right" }} className="fas fa-search"></i>
                    </h5>
                    <hr />
                    {isLoading && !tweets && <p>Loading...</p>}
                    {
                        tweets && (
                        tweets.statuses.map(item => (
                            <TweetListItem key={item.id} item={item} />
                        ))
                    )}
                    <hr />
                    <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/harunrst/"> <h6 className="App"><i className="fab fa-linkedin fa-lg"></i> Harun Reşit Heybet</h6></a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        tweets: state.tweets.payload,
        isLoading: state.tweets.isLoading
    }
};
export default connect(mapStateToProps, null)(TweetList);
