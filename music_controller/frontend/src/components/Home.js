import React,{ Component } from 'react';
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomjoinPage';
import {BrowserRouter as Router,Routes,Link,Route,Redirect} from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <Router>
            <Routes>
                <Route path='/' element= {<p>this is the homepage</p>}></Route>
                <Route path='/join' element={<RoomJoinPage/>}></Route>
                <Route path='/create' element={<CreateRoomPage/>}></Route>
            </Routes> 
        </Router>
        );
    }
}