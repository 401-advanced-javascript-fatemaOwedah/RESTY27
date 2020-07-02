import React from 'react';

import './form.scss';

let localArray= [];
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get'
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.toggleLoading();
    if(this.state.url &&this.state.method ==='post'){
      let dataBody = this.state.body.data;
      console.log('llllllllllllllll',dataBody);
      let response = await fetch(this.state.url, {
        method: 'post',
        mode:'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(dataBody),
      });
      console.log('kkkkkkkkkkk===',response);
      let data = await response.json();
      console.log('data========>', data);
      let count = data.count;
      let results = data.results;
      let headerss = {};
      response.headers.forEach((val, key) =>{
        headerss[key] = val;
      })
      console.log(headerss);
      

      this.props.handler( count, headerss, data, results);
      this.props.toggleLoading();
      
      let final = {url:this.state.url, method:this.state.method};
      localArray.push(final);
      localStorage.setItem('localArray', JSON.stringify(localArray));
    }else if(this.state.url &&this.state.method ==='put'){
        let dataBody = this.state.body.data;
        console.log('llllllllllllllll',dataBody);
        let response = await fetch(this.state.url, {
          method: 'put',
          mode:'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(dataBody),
        });
        console.log('kkkkkkkkkkk===',response);
        let data = await response.json();
        console.log('data========>', data);
        let count = data.count;
        let results = data.results;
        let headerss = {};
        response.headers.forEach((val, key) =>{
          headerss[key] = val;
        })
        console.log(headerss);
        
  
        this.props.handler( count, headerss, data, results);
        this.props.toggleLoading();
        
        let final = {url:this.state.url, method:this.state.method};
        localArray.push(final);
        localStorage.setItem('localArray', JSON.stringify(localArray));
    }else if(this.state.url &&this.state.method ==='delete'){
      let dataBody = this.state.body.data;
      console.log('llllllllllllllll',dataBody);
      let response = await fetch(this.state.url, {
        method: 'delete',
        mode:'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      console.log('kkkkkkkkkkk===',response);
      let data = await response.json();
      console.log('data========>', data);
      let count = data.count;
      let results = data.results;
      let headerss = {};
      response.headers.forEach((val, key) =>{
        headerss[key] = val;
      })
      console.log(headerss);
      

      this.props.handler( count, headerss, data, results);
      this.props.toggleLoading();
      
      let final = {url:this.state.url, method:this.state.method};
      localArray.push(final);
      localStorage.setItem('localArray', JSON.stringify(localArray));
  }else if ( this.state.url && this.state.method) {


      let raw = await fetch(this.state.url); // star wars API
      let data = await raw.json();

      let count = data.count;
      let results = data.results;
      let headerss = {};
      raw.headers.forEach((val, key) =>{
        headerss[key] = val;
      })
      console.log(headerss);
      

      this.props.handler( count, headerss, data, results);
      this.props.toggleLoading();
      
      let final = {url:this.state.url, method:this.state.method};
      localArray.push(final);
      localStorage.setItem('localArray', JSON.stringify(localArray));


    }else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({url});
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  handleChangeText = e => {
    let body = e.target.value;
    let data = body;
    this.setState({ body: { data } });
  }; 

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
          <textarea placeholder="Body" name="requestBody"  onChange={this.handleChangeText}></textarea>
        </form>
      </>
    );
  }
}

export default Form;