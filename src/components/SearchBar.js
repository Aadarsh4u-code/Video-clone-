import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    
  };

  onFormSubmit = event => {
    event.preventDefault();
    //to pass entered text from search bar to App.js we call 
    //we pass props from parents component(i.e SearchBar)  to Here in children 
    //and again make callback from here
    this.props.onFormSubmit(this.state.term);

  };

  render() {

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}//e => this.setState({term: e.target.value})
            />
          </div> 
        </form>
        

      </div>
       );
  }
}
