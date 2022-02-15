import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Pages/AuthPage/Login/Login';
import Signup from './Pages/AuthPage/Signup/Signup';
import Ads from './Pages/AdsPage/Ads';
import Chat from './Pages/Chat/Chat';
import BusinessSettings from './Pages/BusinessSettings/BusinessSettings';
// import PaymentAndBilling from './Pages/PaymentAndBilling/PaymentAndBilling';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/ads" component={Ads} />
        <Route path="/chat" component={Chat} />
        <Route path="/admin-page" component={BusinessSettings} />
        {/* <Route path="/payment-billing" component={PaymentAndBilling} /> */}

      </Switch>
    </Router>
  );
}

export default App;
