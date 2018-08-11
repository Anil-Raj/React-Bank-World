import React,{Component} from 'react';
class FilterRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  
  handleFilterChange(e) {
    console.log(e);
    console.log(e.target);    
    this.props.handleFilterChange(e);
  }
  
  render() {
    return (
        <div>
            <input
                type="checkbox"
                checked={this.props.isChecked}
                onChange={this.handleFilterChange}
            />
            {this.props.value}
        </div>
        );
  }
}

export default FilterRow;