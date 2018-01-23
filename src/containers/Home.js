import React, { Component } from "react";

// bring redux dependencies
import { connect } from "react-redux";
import { latestNews, otherNews, latestGallery } from "../actions"; // action for making network calls
import { bindActionCreators } from "redux"; // needed since using actions

// COMPONENTS
import LatestNews from "../components/home/LatestNews";
import OtherNews from "../components/home/OtherNews";
import Gallery from "../components/home/Gallery";

class Home extends Component {
  componentDidMount() {
    // CALL action creators when the components rendered
    this.props.latestNews();
    this.props.otherNews();
    this.props.latestGallery();
  }

  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles.latest}/>
        <OtherNews otherNews={this.props.articles.other}/>
        <Gallery latestGallery={this.props.galleries.latestGallery}/>
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
    articles: state.articles,
    galleries: state.galleries
  };
}

/*
    Since calling to action creator
    must call this function
*/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ latestNews, otherNews, latestGallery }, dispatch);
}

// to connect everything.. need to setup connect
export default connect(mapStateToProps, mapDispatchToProps)(Home);
