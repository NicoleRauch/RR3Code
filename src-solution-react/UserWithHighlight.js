import React, {Component} from "react";


export default class extends Component {
  constructor(props) {
    super(props);

    this._handleToggleClick = this._handleToggleClick.bind(this);

    this.state = {highlighted: false};
  }

  render() {
    const highlightColor = this.state.highlighted ? "#FF0000" : "#FFFFFF";

    return (
      <div onClick={this._handleToggleClick}
         style={{cursor: "pointer"}}>
        <label>Vorname: </label>
          <span style={{backgroundColor: highlightColor}}>
            {this.props.firstName}</span><br/>
        <label>Nachname: </label>
          <span>{this.props.lastName}</span><br/>
      </div>
    );
  }

  _handleToggleClick() {
    this.setState({highlighted: !this.state.highlighted});
  }
}
