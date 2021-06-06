import { Component } from "react";

class HornedBeasts extends Component {
  render() {
    return (
      <div className="beasts">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.imageUrl} alt={this.props.title} />
      </div>
    );
  }
}

export default HornedBeasts;
