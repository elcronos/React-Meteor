//Componente para Login
export default class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    //Change Background
    changeBackground();
  }
  componentDidMount(){
    $("#spinner").hide();
  }
  handleChangeUsername(event){
    this.username=event.target.value;
  }
  handleChangePassword(event){
    this.password= event.target.value;
  }
  handleLogin(event){
    //transition("");
  }
  handleSignup(event){
    //transition("");
  }
  render(){
    return(
      <div>
          <div className="container-fluid">
              <div className="row-fluid">
                <div className="centering text-center">
                    <Logo />
                </div>
              </div>
              <div className="row-fluid">
                  <div className="centering text-center">
                    <input className="rounded username-signup btn-responsive"
                      value={this.username}
                      onChange={this.handleChangeUsername}
                      placeholder="Usuario"/>
                  </div>
              </div>
              <div className="row-fluid">
                <div className="centering text-center">
                    <input className="rounded password-signup btn-responsive"
                      value={this.password}
                      onChange={this.handleChangePassword}
                      placeholder=""/>
                </div>
              </div>
              <div className="row-fluid">
                <div className="centering text-center">
                  <span className="roboto-font text-signup">Please Confirm your password</span>
                </div>
              </div>
              <div className="row-fluid">
                <div className="centering text-center">
                    <input className="rounded password-signup btn-responsive"
                      value={this.confirm}
                      onChange={this.handleChangeConfirm}
                      placeholder=""/>
                </div>
              </div>
              <br></br>
              <div className="row-fluid">
                <div className="centering text-center">
                    <button onClick={this.handleSignup}
                      className="buttonRounded buttonSolid roboto-font">CREATE NEW PROFILE
                    </button>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

function transition(path){
  $("#content-login").hide();
  $("#spinner").show();
  setTimeout(function() {
    window.location.href = path;
  }, 1000);
}

function changeBackground(){
  //CSS Background Logic
  $('body').addClass('background-blue');

  if($('body').hasClass('background-white')) {
    $('body').removeClass('background-white');
  }
}
