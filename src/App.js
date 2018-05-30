import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchData} from 'actions'

class App extends Component {


    componentDidMount(){
        this.props.fetchData()
    }

    renderTab=()=>{
        const {objdata, objmodel} = this.props.objmodel;
        console.log(objdata);
        if(objmodel)
            console.log(objmodel[1]);
        if(objdata)
            return (
            <div>
            <div>{objdata[1].obj}</div>
            {/*{<ul>
                {objdata.1.par}
            </ul>}*/}
            </div>
        )

    };

    render() {

        return (
            <div>
                {this.renderTab()}
                <button >send</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        objmodel: state
    }
};

const mapDispatchToProps={
    fetchData
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
