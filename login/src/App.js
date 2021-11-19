
import Alert from '@mui/material/Alert';
import Loading from "./components/loading/loading";
import { useEffect } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { useUserContext } from "./context/userContext";
import Auth from "./components/auth/auth";
import Dashboard from "./components/dashBoard/App";
import { auth, database } from './firebase/firebase';
function App() {
  const { loading, error, user } = useUserContext();

  return (
    <div className="App">
      {error && <Alert severity="error" sx={{zIndex:"3000" , position:"absolute"}} > {error} </Alert>}
      {loading ? <Loading/> : <>{user ? <Dashboard/> : <Auth  /> }</>}
    </div>
  );
}

export default App;


// <If condition={user}>
// <If condition={auth.currentUser.emailVerified}>
//       <Dashboard/>
//     <Else>
//       <Verification/>
//     </Else>
// </If>
// <Else>
//       <Auth/>
// </Else>
// </If>