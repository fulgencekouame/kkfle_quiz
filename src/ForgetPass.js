import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from './Firecontext'

const ForgetPass = props => {

    const Firebase = useContext(Context);

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    
    const handleSubmit = e => {
        e.preventDefault();
        Firebase.passwordReset(email)
        .then(() => {
           setError(null); 
           setSuccess(`Consultez votre email ${email} pour changer le mot de passe`) 
           setEmail("");

           setTimeout(() => { 
              props.history.push('/login')
           }, 5000)
        
        })
        .catch(error => {  
            setError(error);
            setEmail("");
        })
    }

    const disabled = email ==="";

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
            <div className="formBoxLeftForget">
                 </div>
                 <div className="formBoxRight">
                      <div className="formContent">
                           
                           { success && <span style={{
                               border: "1px solid green",
                               background: "green",
                               color: "#ffffff" 
                               }}>{success}</span>}

                               {error && <span>{error.messsage}</span>}
                           
                           <h2>Mot de passe oublié</h2>
                           <form onSubmit={handleSubmit}>
                               
                               <div className="inputBox">
                                  <input onChange={e => setEmail(e.target.value)}  value={email} type="email" autoComplete="off" required />
                                  <label htmlFor="email">Email</label>
                               </div>

                               <button disabled={disabled}>Récupérer</button>
                               
                           </form>
                           <div className="linKContainer">
                               <Link className="simpleLink" to="./login">Deja inscrit/Connectez-vous.</Link>
                            </div>
                      </div>
                 </div>
            </div>

        </div>
    )
}

export default ForgetPass

