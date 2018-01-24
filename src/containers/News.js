import React, { Component } from "react";

// bring redux dependencies
import { connect } from "react-redux";
// for actions
import { bindActionCreators } from "redux";
import { selectedNews, clearSelectedNews } from "../actions";

// Likes Counter Container - Component
import Counter from "./LikesCounter";

class News extends Component {

    componentDidMount() {
        // pass id of the current page/route
        this.props.selectedNews(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearSelectedNews();
    }

    renderNews = ({selected}) => {
        if (selected) {
            return selected.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by: <strong>{item.author}</strong></span>
                        </div>
                        <img alt={item.title} src={`/images/articles/${item.img}`} />
                        <div className="body_news">
                            {item.body}
                        </div>
                        <div>
                            <Counter 
                                articleId={item.id}
                                likes={item.likes[0]}
                                dislikes={item.likes[1]}
                                section="articles"
                                type="HANDLE_LIKES_ARTICLE"
                            />
                        </div>
                    </div>
                )
            })
        } 
    }

    render() {
        return (
            <div className="news_container">
                {this.renderNews(this.props.articles)}
            </div>
        );
    }
}

// to link the redux state to 
// the component use this function
function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(News);