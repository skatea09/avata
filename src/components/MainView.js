import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Results from "./Results";

class MainView extends Component {
  options = [
    { value: "all", label: "All" },
    { value: "author", label: "Author" },
    { value: "review_score", label: "Score" },
    { value: "title", label: "Title" }
  ];

  state = { filter: this.options[3].value, inputValue: "" };

  onSelect = selected => {
    this.setState({ filter: selected.value });
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { filter, inputValue } = this.state;
    return (
      <div>
        <div className="flex justify-center mt-4 w-full">
          <Dropdown
            options={this.options}
            onChange={this.onSelect}
            value={filter}
            placeholder="Select an option"
            menuClassName="absolute bg-white pin-l bg-grey-lightest"
            className="border px-2 pt-1 bg-grey-light relative pt-2"
          />
          <input
            type="text"
            className="border border-l-0 w-3/5 pl-2 py-2"
            style={{ maxWidth: '600px' }}
            placeholder="Search"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </div>
        <Results filter={filter} inputValue={inputValue} />
      </div>
    );
  }
}

export default MainView;
