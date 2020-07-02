import React from 'react';


class List extends React.Component {
    takeDataFromLocal(){
        let data = JSON.parse(localStorage.getItem('localArray'));
        if(data){
        return data.map((item, i)=> <li key={i}>method: {item.method} URL: {item.url}</li> )
        }
    }
    render() {
        return (
            <React.Fragment>
            <h2>
                History
            </h2>
            <ul>{this.takeDataFromLocal()}</ul>
            </React.Fragment>
        )
    }
}

export default List;