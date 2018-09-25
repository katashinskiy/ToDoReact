import React, {Component} from 'react';
import  MiniDrawer  from './components/header';
import store from "./store/index"

class App extends Component {
    render() {
        return (
            <MiniDrawer store={store} />
                )
    }
}

export default App;
