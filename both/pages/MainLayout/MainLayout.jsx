MainLayout = React.createClass({
  render() {
    return (
        <div>
          {this.props.nav}
          <div className="container-fluid">
              {this.props.content}
          </div>
        </div>
    );
  }

});
