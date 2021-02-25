import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Home from './components/Home';
import MenuAppBar from './components/MenuAppBar';

function App() {
    return (
        <BrowserRouter>
            <Box>
                <MenuAppBar />
                <Switch>
                    <Route exact path="/" component={Home} />                    
                </Switch>
            </Box>
        </BrowserRouter>
    );
}


const wrapper = document.getElementById('super-googles-front');
wrapper ? ReactDOM.render(<App />, wrapper) : false;