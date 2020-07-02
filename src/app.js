import React from 'react';
import { Route } from 'react-router-dom';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results';
import History from './components/history/history'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // key and value pairs
        count: 0,
        results: [],
        loading: false,
    };
}
toggleLoading = () => {
  this.setState({ loading: !this.state.loading });
}
  // method to be passed to form
  handleForm = (count, headerss,data, results) => {
  this.setState({count, headerss,data, results});
  // {count: count , headers:headers , results:results}

}

  render(){
    return (
      <React.Fragment>
        <Header />
        <Route path="/" exact>
          <Form handler={this.handleForm} toggleLoading={this.toggleLoading}/>
          <Results loading={this.state.loading} count={this.state.count} results={this.state.results}  headerss={this.state.headerss} />
        </Route>
        <Route path="/history">
          <History handel={this.results}/>
        </Route>
        <Footer />
      </React.Fragment>
    );
  }
  
}


export default App;
