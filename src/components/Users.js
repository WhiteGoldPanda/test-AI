import React, { Component } from "react";
import Background from "../icons/user.svg";
import { Button, Fade } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

export default class Users extends Component {
  state = {
    users: [],
    error: null,
    fadeIn: false,
    query: ""
  };
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };
  toggle = () => {
    this.setState(prevState => ({
      fadeIn: !prevState.fadeIn
    }));
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { users, error } = this.state;

    const { query } = this.state;

    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingContacts = users.filter(users => match.test(users.name));
    } else {
      showingContacts = users;
    }

    showingContacts.sort(sortBy("name"));
    return (
      <React.Fragment>
        <div className="list-contacts">
          <div className="list-contacts-top">
            <input
              className="search-contacts"
              type="text"
              placeholder="Search contacts"
              value={query}
            />
          </div>
          {showingContacts.length !== users.length && (
            <div className="showing-contacts">
              <span>
                Now showing {showingContacts.length} of {users.length} total
              </span>
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )}
          <ol className="contact-list ">
            {error ? <p>{error.message}</p> : null}
            {users.map(user => {
              const {
                username,
                name,
                email,
                phone,
                address,
                website,
                company
              } = user;
              return (
                <li className="contact-list-item" key={username} location={0}>
                  <div
                    className="contact-avatar"
                    style={{
                      backgroundImage: `url(${Background})`
                    }}
                  />

                  <div className="contact-details ">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                  </div>

                  <Button className="contact-remove" onClick={this.toggle}>
                    Remove
                  </Button>
                  <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <p>
                      {address.city},{address.street},{address.suite}
                    </p>
                    <p>{website}</p>
                    <p>
                      {company.name},{company.catchPhrase},{company.bs}
                    </p>
                  </Fade>
                </li>
              );
            })}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}
