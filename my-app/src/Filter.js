import React,{Component} from 'react';
import FilterRow from './FilterRow';
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = {
        currentValues: []
      }
  }
  
  handleFilterChange(e) {
      console.log(e);
    this.props.handleFilterChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
          <FilterRow value="green" isChecked={this.state.currentValues.indexOf('green') > -1} handleFilterChange={this.handleFilterChange}
          />
          <FilterRow value="red" isChecked={this.state.currentValues.indexOf('red') > -1}  handleFilterChange={this.handleFilterChange}
          />
      </form>
    );
  }
}


export default Filter;