//Componente para Login
export default class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    //CSS Background Logic
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
    transition("/home");
  }
  handleSignup(event){
    transition("/signup");
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
                    <input className="rounded username btn-responsive"
                      value={this.username}
                      onChange={this.handleChangeUsername}
                      placeholder="Usuario"
                      />
                  </div>
              </div>
              <div className="row-fluid">
                <div className="centering text-center">
                    <input className="rounded password btn-responsive"
                      value={this.password}
                      onChange={this.handleChangePassword}
                      placeholder=""/>
                </div>
              </div>
                <br></br>
              <div className="row-fluid">
                  <div className="centering text-center">
                    <button onClick={this.handleLogin}
                      className="buttonRounded buttonSolid">LOG IN
                    </button>
                  </div>
              </div>
              <br></br>
              <div className="row-fluid">
                <div className="centering text-center">
                    <button onClick={this.handleSignup}
                      className="buttonRounded buttonSolid">CREATE NEW PROFILE
                    </button>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

function transition(path){
  $("#content-layout").addClass("vcenter");
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
