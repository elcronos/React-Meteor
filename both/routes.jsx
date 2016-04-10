// Routes
import LoginForm from './pages/LoginLayout/Login/LoginForm'
import SignupForm from './pages/LoginLayout/Signup/SignupForm'
import Navbar from './components/Navbar'

FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(LoginLayout, {
      content: <LoginForm  />
    });
  }
});

FlowRouter.route("/signup", {
  action: function() {
    ReactLayout.render(LoginLayout, {
      content: <SignupForm />
    });
  }
});

FlowRouter.route("/home", {
  action: function() {
    ReactLayout.render(MainLayout, {
      nav: <MyNavButton />,
      content: ''
    });
  }
});

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: 'No encontrado'});
  }
};
