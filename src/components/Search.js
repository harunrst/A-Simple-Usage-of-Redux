import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchTweet } from "../store/actions/tweetActions";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    callFetchTweet = () => {
        if(this.state.searchQuery === '') return;
        this.props.fetchTweet(this.state.searchQuery);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-3">
                        <input
                            name="searchQuery"
                            style={{ marginTop: 3 }}
                            value={this.state.searchQuery}
                            onChange={this.onChangeHandler}
                            className="form-control"
                            placeholder="Search Query"
                        >
                        </input>
                    </div>
                    <div className="col-md-1.5">
                        <button onClick={this.callFetchTweet} style={{ marginTop: 3, borderColor: "gray" }} type="button" className="form-control btn btn-light btn-md"><i className="fas fa-search"></i></button>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = {
    fetchTweet
}
export default connect(null, mapDispatchToProps)(Search)