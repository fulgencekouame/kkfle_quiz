import React, { useState, useContext, useEffect } from 'react';
import Logout from './Logout'
import Quiz from './Quiz'
import { Context } from './Firecontext'
import Loader from './Loader'

const Welcome = props => {

   const Firebase = useContext(Context);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});
    
    useEffect(() => {

      let listener = Firebase.auth.onAuthStateChanged( user => {
          user? setUserSession(user) : props.history.push('/') 
      })

      if (!!userSession) {
        Firebase.user(userSession.uid)
        .get()
        .then( doc => {
            if (doc && doc.exists) {
                const myData = doc.data();
                setUserData(myData)
            }
        })
        .catch( error => {
            console.log(error);
        })
    }

    return () => {
        listener()
    };
}, [userSession, Firebase, props.history])
      
     

    return userSession === null ? ( 
        <Loader
           loadingMsg={"Authentification ..."}
           styling={{textAlign: 'center', color: '#FFFFFF'}}
           />
    ) : (
        <div className="quiz-bg">
            <div classname="container">
                 <Logout />
                 <Quiz userData={userData}/>
            
            </div>

        </div>
    )  

   
}

export default Welcome;