import React from "react";

class UserClass extends React.Component {
  //access props
  constructor(props) {
    super(props);
    console.log(props);
    //create state variables
    this.state = {
      cnt: 0,
      cnt2: 1,
    };
  }

  render() {
    return (
      <div className="user-info">
        {/* <h1>Count: {this.state.cnt}</h1>
        <div>
          <button
            onClick={() => {
              //set state
              this.setState({ cnt: this.state.cnt + 1 });
            }}
          >
            Increase cnt
          </button>
        </div> */}
        <h2>Name: {this.props.name}</h2>
        <h3>Address: {this.props.address}</h3>
        <h3>Github UserName: Ajeetkrup</h3>
      </div>
    );
  }
}

export default UserClass;
