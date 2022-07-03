import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';

import React, { Component } from 'react'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apikey=process.env.REACT_APP_NEWS_API;

  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  //apikey=966ff84abadb46d18bf829b353645bd8
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar height={3} color='red' progress={this.state.progress}/>
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey}  setProgress={this.setProgress}  key="general" pagesize={5} country={"in"} />}></Route>
            <Route exact path="/business" element={<News apikey={this.apikey}  setProgress={this.setProgress}  key="business" pagesize={5} country={"in"} category={'business'} />}></Route>
            <Route exact path="/entertainment" element={<News apikey={this.apikey}  setProgress={this.setProgress}   key="entertainment" pagesize={5} country={"in"} category={'entertainment'} />}></Route>
            <Route exact path="/health" element={<News apikey={this.apikey}  setProgress={this.setProgress}   key="health" pagesize={5} country={"in"} category={'health'} />}></Route>
            <Route exact path="/science" element={<News apikey={this.apikey}  setProgress={this.setProgress}   key="science" pagesize={5} country={"in"} category={'science'} />}></Route>
            <Route exact path="/sports" element={<News apikey={this.apikey}  setProgress={this.setProgress}  key="sports"  pagesize={5} country={"in"} category={'sports'} />}></Route>
            <Route exact path="/technology" element={<News apikey={this.apikey}  setProgress={this.setProgress}  key="technology"  pagesize={5} country={"in"} category={'technology'} />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
