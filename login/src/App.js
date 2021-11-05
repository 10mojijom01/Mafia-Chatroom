
import Alert from '@mui/material/Alert';
import Loading from "./components/loading/loading";

import { useUserContext } from "./context/userContext";
import Auth from "./components/auth/auth";
import Dashboard from "./components/dashBoard/dashboard";

function App() {
  const { loading, error, user } = useUserContext();

  return (
    <div className="App">

    {error && <Alert severity="error" sx={{zIndex:"3000" , position:"absolute"}} > {error} </Alert>}
    {loading ? <Loading/> : <>{user ? <Dashboard/> : <Auth  /> }</>}





















      {/* 
        

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
      </div> */}
    </div>
  );
}

export default App;
