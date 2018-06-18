import React, { Component } from "react";
import { articles } from "../seedData";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      return (
        <li key={i}>
          {article.title}{" "}
          <a href={article.url} className="details">
            (link)
          </a>
          <p className="description">{article.description}</p>
          <p className="details">
            <button onClick={() => this.handleUpVoteBtn(article, i)}>
              up vote
            </button>
            | {article.votes} points by{" "}
            {article.author != null ? article.author : "unknown"} | Published on{" "}
            {article.publishedAt}
          </p>
        </li>
      );
    });
  }
  handleUpVoteBtn(article, i) {
    const count = article.votes + 1;
    const updatedArticle = {
      ...article,
      votes: count
    };
    this.setState({
      articles: [
        ...this.state.articles.slice(0, i),
        updatedArticle,
        ...this.state.articles.slice(i + 1)
      ]
    });
  }
}

export default NewsFeed;
