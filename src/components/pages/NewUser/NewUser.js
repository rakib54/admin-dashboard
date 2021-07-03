import React from 'react';
import './NewUser.css'

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label >User Name</label>
                    <input type="text" placeholder="rakibur74" />
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                    <input type="text" placeholder="Rakibur Rahman" />
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="email" placeholder="rakibur74@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                    <input type="text" placeholder="+8801231778822" />
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder="Dhaka" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="others" value="others" />
                        <label for="others">Others</label>
                    </div>
                    <div className="newUserItem">
                        <label >Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
};

export default NewUser;