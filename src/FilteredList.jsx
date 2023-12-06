// import React, { Component } from 'react';
// import List from './List';

// class FilteredList extends Component {
//   constructor(props) {
//     super(props);

//     //The state is just a list of key/value pairs (like a hashmap)
//     this.state = {
//       search: "",
//       type: "All"
//     };
//   }

//   //Sets the state whenever the user types on the search bar
//   onSearch = (event) => {
//     this.setState({ search: event.target.value.trim().toLowerCase() });
//   }

//   //Sets the state whenever the user selects a type from the dropdown
//   onFilter = (type) => {
//     this.setState({ type: type });
//   }

//   //Filters the list based on the search value and type
//   filterItem = (item) => {
//     const searchMatch = item.name.toLowerCase().includes(this.state.search);
//     const typeMatch = this.state.type === "All" || item.type === this.state.type;
//     return searchMatch && typeMatch;
//   }

//   render(){
//     //Extract the unique list of types from the produce list
//     const types = ["All", ...new Set(this.props.items.map(item => item.type))];

//     return (
//       <div className="filter-list">
//         <h1>Produce Search</h1>
//         <input type="text" placeholder="Search" value={this.state.search} onChange={this.onSearch} />
//         <div>
//           {types.map((type, index) => (
//             <button key={index} onClick={() => this.onFilter(type)}>{type}</button>
//           ))}
//         </div>
//         <List items={this.props.items.filter(this.filterItem)} />
//       </div>
//     );
//   }
// }

// export default FilteredList;
import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      type: ""
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  //Sets the state whenever the user types on the type filter input
  onFilter = (event) => {
    this.setState({ type: event.target.value.trim().toLowerCase() });
  }

  filterItem = (item) => {
    const search = this.state.search;
    const type = this.state.type;

    if (search && type) {
      return item.name.toLowerCase().includes(search) && item.type.toLowerCase() === type;
    } else if (search) {
      return item.name.toLowerCase().includes(search);
    } else if (type) {
      return item.type.toLowerCase() === type;
    } else {
      return true;
    }
  }

  render(){
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <input type="text" placeholder="Search" value={this.state.search} onChange={this.onSearch} />
        <input type="text" placeholder="Type (e.g. fruit, vegetable)" value={this.state.type} onChange={this.onFilter} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
