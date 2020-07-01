import React from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form/form.js';
import Results from './components/results/results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // key and value pairs
        count: 0,
        results: []
    };
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
        <Form handler={this.handleForm}/>
        <Results count={this.state.count} headerss={this.state.headerss} results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;