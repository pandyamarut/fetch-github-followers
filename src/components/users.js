import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersActions'

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users)

        
        return (
            <div>
                {users.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.login}</h6> 
                <img src={u.avatar_url} alt="Girl in a jacket" width="50" height="60"></img>
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)