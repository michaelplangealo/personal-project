import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Trimmer from './components/Trimmer/Trimmer';
import Shave from './components/Shave/Shave';
import Cart from './components/Cart/Cart';
import Product from './components/Products/Product';

// import Subscription from './components/Shave/Subscription';
// import SafetyRazor from './components/Shave/SafetyRazor';
// import StarterKit from './components/Shave/StarterKit';
// import GiftCard from './components/Shave/GiftCard';
// import Blades from './components/Shave/Blades';
// import ShaveCream from './components/Shave/ShaveCream';
// import RestoringBalm from './components/Shave/RestoringBalm';
// import PrimingOil from './components/Shave/PrimingOil';
// import ShaveBrush from './components/Shave/ShaveBrush';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/trimmer" component={ Trimmer } />
        <Route path="/shave" component={ Shave } />
        <Route path="/cart" component={ Cart } /> 
        <Route path="/product" component={ Product } />       
    </Switch>
)
