import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';

const Data = () => {

    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [users,setUsers] = useState([])
    const db = firebase.firestore();

    const getname = (e) => {
        setName(e.target.value)
    }

    const getsurname = (e) => {
        setSurname(e.target.value)
    }

    const createUser = (e) =>{
        e.preventDefault();
        db.collection('users').add({
            name:name,
            surname:surname
        })
        .then((res) => {console.log('user created')})
        .catch((err) => {console.log(err)})
    }

    //get all users

    useEffect(() => {
        let userinfo =[];
        db.collection('users').get()
        .then((res) => {
            res.forEach(action => {
                userinfo.push({...action.data(), id: action.id});
                console.log(action.data())
            })
            setUsers(userinfo);

        })
    },[])

    //delete function
    const deleteUser = (e) => {
        let uid = e.target.id
        db.collection('users').doc(uid).delete()
        .then(() => {console.log('user deleted')})
        .catch((err) => {console.log(err)})
    }


    //update function
    const updateUser = (e) => {
        let uid = e.target.id
        db.collection('users').doc(uid).update({
            name : name,
            surname: surname
        })
        .then(() => {console.log('user updated')})
        .catch((err) => {console.log(err)})
    }
       

    

    return (
        <>
        <div className ={"container mt-4"}>
            <form onSubmit = {createUser}>
            <div className="input-group">
            <span className="input-group-text">First and last name</span>
            <input name = "name" onChange={getname} type="text" aria-label="First name" class="form-control"></input>
            <input name ="surname" onChange={getsurname} type="text" aria-label="Last name" class="form-control"></input>
            <button type="submit" className="btn btn-secondary">Add</button>
            </div>

            </form>

            {/*display users from firestore*/}
               {
                   users.map((action) => ( 
                    <div className="card mt-4" key ={ action.id }>
                    <div className="card-header">
                        Custom user
                   </div>
                   <div className="card-body">
                   <h5 className="card-title">User Details</h5>
                   <p className="card-text">{ action.name},{action.surname}.</p>
                   <button id ={ action.id } onClick = { deleteUser} className="btn btn-danger me-2">Delete user</button>
                   <button id ={ action.id } onClick = { updateUser} className="btn btn-secondary">Update user</button>
                 </div>
                   </div>
        

                   ))
               }

            
        </div>

        </>
    )
} 
export default Data