import React, { Component } from "react";

// bring redux dependencies
import { connect } from "react-redux";
import { latestNews, otherNews } from "../actions"; // action for making network calls
import { bindActionCreators } from "redux"; // needed since using actions

// COMPONENTS
import LatestNews from "../components/home/LatestNews";
import OtherNews from "../components/home/OtherNews";

class Home extends Component {
  componentDidMount() {
    this.props.latestNews();
    this.props.otherNews();
  }

  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles.latest}/>
        <OtherNews otherNews={this.props.articles.other}/>
      </div>
    );
  }
}
/*
    Needed to pass state, to the props
    To access the props redux is returning
    this function is needed
*/
function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

/*
    Since calling to action creator
    must call this function
*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ latestNews, otherNews }, dispatch);
}

// to connect everything.. need to setup connect
export default connect(mapStateToProps, mapDispatchToProps)(Home);
