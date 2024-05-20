import React, { Component } from 'react';
import { CgDanger } from 'react-icons/cg';
import './index.css';

class Login extends Component {
  state = {
    showLogo: true,
    userName: '',
    password: '',
    showerrorUsername: false,
    showerrorPassword: false,
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showLogo: false });
    }, 2000); 
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onChangeUser = (event) => {
    this.setState({ userName: event.target.value });
    console.log(event.target.value)
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    
  
    if (userName === '') {
      this.setState({ showerrorUsername: true });
    } else {
      this.setState({ showerrorUsername: false });
    }
  
    if (password === '') {
      this.setState({ showerrorPassword: true });
    } else {
      this.setState({ showerrorPassword: false });
    }
  
    if (userName === 'username' && password === 'password') {

      this.props.history.push('/home');
    }
  };
  
  render() {
    const { showLogo, showerrorUsername, showerrorPassword } = this.state;
    return (
      <>
      <div className="log-container">
        {showLogo ? (
          <img
            className="logo"
            src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716115706/Untitled-removebg-preview_o7ixd9.png"
            alt="logo"
          />
        ) : (
          <div className="login-container">
            <h1 className="hello">Hello</h1>
            <h1 className="again">Again!</h1>
            <p className="para">Welcome back you've been missed</p>
            <form className="form" onSubmit={this.handleSubmit}>
            <div className='input-container'>
                <label className='form-name' htmlFor='username'>Username <span className='span'>*</span></label>
                <input className={showerrorUsername ? "error-input" : "input"} id="username" type="text" onChange={this.onChangeUser} />
                {showerrorUsername && <p className='invalid'><CgDanger className='dan'/> Invalid Username</p>}
            </div>
            <div className='input-container'>
                <label className='form-name' htmlFor='password'>Password <span className='span'>*</span></label>
                <input className={showerrorUsername ? "error-input" : "input"} id="password" type="password" onChange={this.onChangePassword} />
                {showerrorPassword && <p className='invalid'><CgDanger className='dan'/> Invalid Password</p>}
            </div>

              <div className="button-containers">
                <div className="rem-container">
                  <div className="rem-check">
                    <input type="checkbox" id="check" className="check" />
                    <label className="rem-text" htmlFor="check">
                      Remember me
                    </label>
                  </div>
                  <p className="forgot-text">Forgot the password ?</p>
                </div>
                <button type="submit" className="login-btn">
                  Login
                </button>
                <p className="con-text">or continue with</p>
                <div className="social-btns-con">
                  <button className="social-btn" type="button">
                    <img
                      src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716099972/images_1_rhc42f.png"
                      className="social-img"
                      alt="Facebook"
                    />
                    Facebook
                  </button>
                  <button className="social-btn" type="button">
                    <img
                      src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716109138/images_2_t3ngkj.png"
                      className="social-img"
                      alt="Google"
                    />
                    Google
                  </button>
                </div>
                <p className="con-text">
                  don't have an account ? <span className="span">Sign Up</span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    <div className="suitable">
    <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716213021/no_laptop_q64jzs.avif" className="pc-img" alt="no pc" />
    <h1 className="mobile">Best Suited for Mobile</h1>
  </div>
      </>

    );
  }
}

export default Login;
