class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userStatus: "NOT LOGGED IN" };
    this.setStatus = this.setStatus.bind(this);
  }
  setStatus(username, password) {
    const newUsers = users;
    newUsers.map((user) => {
      if (user.username == username && user.password === password) {
        this.setState({
          userStatus: "LOGGED IN",
        });
      }
    });
  }
  render() {
    return (
      <div>
        <Status status={this.state.userStatus} />
        <Login handleSubmit={this.setStatus} />{" "}
      </div>
    );
  }
}
