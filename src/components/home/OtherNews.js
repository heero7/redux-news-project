import React from 'react';
import { Link } from 'react-router-dom';


const renderOtherNews = ({otherNews}) => {
    if (otherNews) {
        return otherNews.map((newsItem) => {
            return (
                <Link to={`/news/${newsItem.id}`} key={newsItem.id} className="item">
                    <div className="left"
                        style={{background: `url(/images/articles/${newsItem.img})`}}></div>
                    <div className="right">
                        <h3>{newsItem.title}</h3>
                        <div className="category-tag">{newsItem.category}</div>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {newsItem.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {newsItem.likes[0]}
                            </span>
                        </div>
                    </div>
                </Link>
            );
        });
    }
}

const OtherNews = (props) => {
    console.log(props);
    return (
        <div className="other-news">
            <h2>Other News</h2>
            <div className="other-news-items">
                {renderOtherNews(props)}
            </div>
        </div>
    )
}

export default OtherNews;