import React,{ useState, useContext } from 'react';
import Context from './Context'
import { Link } from 'react-router-dom'

const Signup = (props) => {

    const Firebase = useContext( Context) 

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password} = loginData;
        Firebase.signupUser(email, password)
        .then(authUser => {
            return Firebase.user(authUser.user.uid).set ({
                pseudo,
                email
            })
        })
        .then(() => {
            setLoginData({...data});
            props.history.push('./Welcome');
        })
          
        
        .catch(error => {
           setError(error); 
           setLoginData({...data});
        })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo ==='' || email ==='' || password ==='' || password !== confirmPassword
    ? <button disabled>Inscription</button> : <Link className="simpleLink" to='./Welcome'><button>Inscripton</button></Link>

    //gestion erreur
    const errorMsg = error !=='' && <span>{error.message}</span>;

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                 <div className="formBoxLeftSignup">
                 </div>
                 <div className="formBoxRight">
                      <div className="formContent">

                          {errorMsg}

                      <h2>Inscription</h2>
                           <form onSubmit = {handleSubmit}>
                               
                               <div className="inputBox">
                                  <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                  <label htmlFor="pseudo">Pseudo</label>
                               </div>
                               <div className="inputBox">
                                  <input onChange={handleChange}  value={email} type="email" id="email" autoComplete="off" required />
                                  <label htmlFor="email">Email</label>
                               </div>
                               <div className="inputBox">
                                  <input onChange={handleChange}  value={password} type="password" id="password" autoComplete="off" required />
                                  <label htmlFor="password">Mot de passe</label>
                               </div>
                               <div className="inputBox"> 
                                  <input onChange={handleChange}  value={confirmPassword} type="password" id="confirmPassword" autoC omplete="off" required />
                                  <label htmlFor="confirmPassword">Confirmer mot de passe</label>
                               </div>
                               
                               {btn}
                           </form>
                           <div className="linKContainer">
                               <Link className="simpleLink" to="./Login">Déjà inscrit? Conectez-vous.</Link>
                           </div>
                      </div>
                 </div>
            </div>

        </div>
    )
}
export default Signup;