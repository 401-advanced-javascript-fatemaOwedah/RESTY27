import React from 'react';
import ReactJson from 'react-json-view';

class History extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  handelClick = async (e)=>{
    e.preventDefault();
    let api = e.target.value;
    let raw = await fetch(api);
    let APIdata = await raw.json();
    console.log(APIdata);
    this.setState({APIdata});
  }

  render(){
    return(
      <section className='history'>
        {this.props.api.map((api,i)=>{
          return(
            <>
              <button key={api} value={api} onClick={this.handelClick}>Click</button>
              <li key={api}>{api}</li>
              <div>
                <ReactJson src= {this.state.APIdata} />
              </div>
            </>
          );
        })}
      </section>
    );

  }
}

export default History;