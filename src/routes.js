import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Trimmer from './components/Trimmer/Trimmer';
import Shave from './components/Shave/Shave';
import Cart from './components/Cart/Cart';
import Product from './components/Products/Product';
import Login from './components/Login/Login';
import Subscription from './components/Subscription/Subscription';
import SafetyRazor from './components/SafetyRazor/SafetyRazor';
// import StarterKit from './components/Shave/StarterKit';
// import GiftCard from './components/Shave/GiftCard';
import Blades from './components/Blades/Blades';
import StoreLanding from './components/Shave/ShaveLanding';
import ShaveCream from './components/ShaveCream/ShaveCream';
// import ShaveCream from './components/Shave/ShaveCream';
import RestoringBalm from './components/RestoringBalm/RestoringBalm';
import PrimingOil from './components/PrimingOil/PrimingOil';
import ShaveBrush from './components/ShaveBrush/ShaveBrush';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/trimmer" component={ Trimmer } />
        <Route path="/shave" render={() => (
            <StoreLanding>
                <Switch>
                    <Route path="/shave/subscription" component={Subscription} />
                    <Route path="/shave/blades" component={Blades} />
                    <Route path="/shave/shave-cream" component={ShaveCream} />
                    <Route path="/shave/restoring-balm" component={RestoringBalm} />
                    <Route path="/shave/shave-brush" component={ShaveBrush} />
                    <Route path="/shave/safety-razor" component={SafetyRazor} />
                    <Route path="/shave/priming-oil" component={PrimingOil} />
                    <Route component={Shave} />
                </Switch>
            </StoreLanding>
        )} />
        <Route path="/cart" component={ Cart } /> 
        <Route path="/product" component={ Product } /> 
        <Route path="/login" component={Login} />      
    </Switch>
)
