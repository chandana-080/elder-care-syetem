import React, { useState, useEffect } from 'react';
import axios from 'axios';



function CareTakerCards() {
  const [err, setErr] = useState('');
  const [users, setUsers] = useState([]); 


  

  useEffect(() => {
    axios
    .get('http://localhost:3500/care-api/get-care')
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setUsers(response.data);
      }
    })
    .catch((err) => {
      console.log('err is', err);
      setErr(err.message);
    });
  }, []);

 
  

 

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
        {users.map((userObj) => (
          <div className="col mt-3" key={userObj.id}>
            <div className="card">
              <img src={userObj.image} className="mx-auto p-3 profile-image" alt="" width="180px" />
              <div className="card-body">
                <p className="text-info name">{userObj.name}</p>
                <p className="name">DOB: {userObj.dob}</p>
                
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default CareTakerCards;
