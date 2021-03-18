import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeLanguages = this.onChangeLanguages.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      title: "",
      languages: "",
      date: new Date(),
      description: "",
      url: "",
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/projects/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          title: response.data.title,
          languages: response.data.languages,
          date: new Date(response.data.date),
          description: response.data.description,
          url: response.data.url,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeLanguages(e) {
    this.setState({
      languages: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const project = {
      username: this.state.username,
      title: this.state.title,
      languages: this.state.languages,
      date: this.state.date,
      description: this.state.description,
      url: this.state.url,
    };

    console.log(project);

    axios
      .post(
        "http://localhost:5000/projects/update/" + this.props.match.params.id,
        project
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Project</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={() => this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Languages: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.languages}
              onChange={() => this.onChangeLanguages}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={() => this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={() => this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Url: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.url}
              onChange={() => this.onChangeUrl}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edit Project"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
