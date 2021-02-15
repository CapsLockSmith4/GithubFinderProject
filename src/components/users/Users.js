import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({users, id, loading}) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div className='griduserStyle'>
                {users.map(user => (
                    <UserItem key={id} user={user} /> 
                ))} 
            </div>
            
        );
}
}
export default Users