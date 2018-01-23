import React, { Component } from "react";

// bring redux dependencies
import { connect } from "react-redux";
// for actions
import { bindActionCreators } from "redux";
import { selectedNews, clearSelectedNews } from "../actions";

class News extends Component {

    componentDidMount() {
        // pass id of the current page/route
        this.props.selectedNews(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearSelectedNews();
    }

    render() {
        return (
            <div>Article</div>
        );
    }
}

// to link the redux state to 
// the component use this function
function mapStateToProps(state) {
    console.log("State from News, " + state);
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch);
}

export default connect(mapDispatchToProps, mapDispatchToProps)(News);