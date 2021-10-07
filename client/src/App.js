import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './component/layout/Header';
import Homepage from './component/pages/homepage/Homepage';
import Footer from './component/layout/Footer/Footer';
import SingleProduct from './component/pages/singleProduct/SingleProduct';
import Error from './component/layout/error/Error';
import Loading from './component/layout/loading/Loading';
import Search from './component/layout/search/Search';
import ResultProductpage from './component/pages/Searchpages/ResultProductpage';
import Cardpage from './component/pages/myCart/Cardpage';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        {/* <Homepage /> */}
        <Route path='/singleproduct/:id' component={SingleProduct} />
        <Route path='/search' component={Search} />
        <Route path='/loading' component={Loading} />
        <Route path='/error' component={Error} />
        <Route path='/all' component={ResultProductpage} />
        <Route path='/cart' component={Cardpage} />

        {/* <Route path='/fvdgd' /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
