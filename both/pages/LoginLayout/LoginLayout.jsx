LoginLayout =  React.createClass({
  render() {
    return (
    <div>
          <div className="container-fluid">
              <div className="row-fluid">
                  <div className="centering text-center">
                    <div id="content-layout">
                      <Spinner />
                      <div id="content-login">
                          {this.props.content}
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
    );
  }
});
