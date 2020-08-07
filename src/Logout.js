import React, { useState, useEffect, useContext } from 'react' 
import { Context } from './Firecontext'
import ReactToolTip from 'react-tooltip'

const Logout = () => {

    const Firebase = useContext(Context);


    const [checked, setChecked] = useState(false);

    useEffect(() => {
       if(checked) {
          Firebase.signoutUser();
       }
            
    }, [ checked, Firebase]);

    const handleChange = event =>{
        setChecked(event.target.checked);
    }
    return (
        <div className="logoutContainer">
            <label className="switch">
                <input
                    onCkange={handleChange} 
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round" data-tip="Deconnexion"></span>
            </label>
            <ReactToolTip
               place="left"
               effect="solid"
            
            />

          
        </div>
    )
}

export default Logout