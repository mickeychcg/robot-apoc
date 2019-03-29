import React, { Component } from 'react';

const News = (props) => {
    return (
        <>
         <div className="Breaking">
          <h2> Breaking News!</h2>
          <p>Headline Here</p>
          <p>Headline Here</p>
          <p>Headline Here</p>
          <p>Headline Here</p>
          <p>Headline Here</p>

class News extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      currentArticle: null,
      
      newsList: [
        {title: 'MASS ATTACK in Chicago!', detail: 'The City of Big Shoulders has become the city of Big Angry T800s. As of last Tuesday, the T800s have consumed all of the remaining deep dish pizza and have sunk all of the sailboats in Belmont Harbor. Officials are recommending... '},
        {title: 'Trump Tower overrun by Decepticon!', detail: "Dateline: March 29 - NYC's Trump Tower has been compromised by a large orange, trantrum-throwing Decepticon. The RAG recommends steering clear of the Tower..." },
        {title: 'Ultron has been spotted in Paris', detail: 'loem ipsum sit dolor...'}
      ]
    }
  }

  handleClick = (article) => {
    this.setState({currentArticle: article})
  }

  clearArticle = () => {
    this.setState({currentArticle: null})
  }
    render() {
      if (!this.state.currentArticle){
        let articleTitles = this.state.newsList.map( (article, index) => {
          return (
            <h3 onClick={() => this.handleClick(article)}> {article.title}</h3>
          )
        })

        return (
          <>
          {articleTitles}
          </>
        )
      } else {
        return (
        <div>
          <small onClick={this.clearArticle}>Back to articles</small>
          <h3>{this.state.currentArticle.title}</h3>
          <p>{this.state.currentArticle.detail}</p>
        </div>
      )
    }
  }
}


export default News