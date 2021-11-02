
import './App.css';
import './forms.css'
import register from './images/Svg/register.svg'
import login from './images/Svg/login.svg'
import Register from './register';
import Login from './login';


function App() {
  return (
    <div className="App">
      <div className="forms-container">
        <div className="signin-signup">
          <Register/>      
          <Login/>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>تازه واردی ؟</h3>
            <button className="btn transparent" id="sign-up-btn">عضویت</button>
            
          </div>
          <img src={register} alt="register"/>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>از قبل اکانت داری ؟</h3>
            <button className="btn transparent" id="sign-in-btn">ورود</button>
            
          </div>
          <img src={login} alt="login"/>
        </div>
      </div>
    </div>
  );
}

export default App;
