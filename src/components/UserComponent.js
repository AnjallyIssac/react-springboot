import React from "react";
import UserService from "../services/UserService";

class UserComponet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>UserId</td>
              <td>FistName</td>
              <td>LastName</td>
              <td>email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserComponet;
