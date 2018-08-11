import React,{Component} from 'react';
class FilterRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  
  handleFilterChange(e) {
    this.props.handleFilterChange(e.target.checked);
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