import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './component/layout/Navbar/Navbar';
import Homepage from './component/pages/homepage/Homepage';
import Footer from './component/layout/Footer/Footer';
import SingleProduct from './component/pages/singleProduct/SingleProduct';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        {/* <Homepage /> */}

        <Route path='/sing' component={SingleProduct} />
        {/* <Route path='/fvdgd' /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
