import React from 'react';
import './App.css';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.favcol !== state.favoritecolor) {
      return { favoritecolor: props.favcol };
    }
    return null;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 1000)
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  }

}
export default Car;
