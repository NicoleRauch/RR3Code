import React, {Component} from "react";

export default class extends Component {

  constructor(props) {
    super(props);
    console.log("Child Component constructor.")
  }

  componentWillMount() {
    console.log("Child Component will mount.");
  }

  componentDidMount() {
    console.log("Child Component did mount.");
  }

  componentWillReceiveProps() {
    console.log("Child Component will receive props.");
  }

  shouldComponentUpdate() {
    console.log("Should Child Component update?");
    return true;
  }

  componentWillUpdate() {
    console.log("Child Component will update.");
  }

  componentDidUpdate() {
    console.log("Child Component did update.");
  }

  componentWillUnmount() {
    console.log("Child Component will unmount.");
  }

  render() {
    console.log("Child Component render.");
    return <p>{this.props.checked ? "Checked" : "Unchecked"}</p>;
  }

}
