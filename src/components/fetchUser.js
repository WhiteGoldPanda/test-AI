import React, { Component } from "react";

export default class FetchClient extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    console.log(users);
    return (
      <React.Fragment>
        <h1>Users</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, name, email, phone } = user;
            return (
              <div className="collection" key={username} location={0}>
                <a href="/users/current_user" className="collection-item">
                  <p>Name: {name}</p>
                  <p>Email Address: {email}</p>
                  <p>Phone: {phone}</p>
                </a>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}
