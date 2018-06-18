import React, { Component } from "react";
import {articles} from "../seedData";
// import UpVote from "./UpVote";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
      votes: articles.votes
    };
  }

  render() {
    return this.state.articles.map((article, i) => {
      // TODO: start coding!
      return <li key={i}>{article.title} <a href={article.url}  className="details">(link)</a>
      <p className="description">{article.description}</p>
      <p className="details">
      <button onClick={(event) => this.handleUpVoteBtn(i, event)}>up vote{article.votes}</button>
      {/* <UpVote votes={articles.votes} handleUpVoteBtn={this.handleUpVoteBtn}  />  */}
      {this.state.articles[i].votes} points by {article.author != null ? article.author : "unknown"} | Published on {article.publishedAt}</p>
      </li>;
    });
  }
  handleUpVoteBtn = (i, event) => {
    console.log(this.state.articles[i].votes)
    // const updatedArticle = {
    //   this.state.articles[i].votes:
    // }
    // this.setState({
      
    // })
  }
}

export default NewsFeed;
