import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHastag } from "../store/actions/hastagActions";

class HastagList extends Component {

    componentDidMount = () => {
        this.props.fetchHastag();
    };

    render = () => {
        const { hastags, isLoading } = this.props;
        return (
            <div className="card hastag border-info">
                <div className="card-body">
                    <h5 className="card-title">Trends for you #</h5>
                    <hr />
                    {isLoading && !hastags && <p>Loading...</p>}
                    {hastags && (
                        hastags.trends.slice(0,30).map(item => (
                        item.name[0] === '#' &&
                        <p className="card-text text-info" key={item.name}> {item.name}</p>
                    )) 
                    )}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        hastags: state.hastags.payload,
        isLoading: state.hastags.isLoading
    }
};
const mapDispatchToProps = {
    fetchHastag
   };

export default connect(mapStateToProps, mapDispatchToProps)(HastagList);
