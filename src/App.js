import React, { Component } from 'react';
import {socket, dataFromServer} from './socket'


class App extends Component {
    state={
        data:null
    }

        sendSocket = () => {
        socket.send('give objects model!')
    }

    componentDidMount(){

    }



    render() {

        return (
            <div>
                <button onClick={this.sendSocket}>send</button>
            </div>
        )
    }
}


export default App;
