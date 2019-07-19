import React, { Component } from "react";

export default class CollapsibleEmailBody extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (    
      <tbody>
        {this.props.children(this.state.collapsed, this.toggleCollapse)}
      </tbody>
    );
  }
}