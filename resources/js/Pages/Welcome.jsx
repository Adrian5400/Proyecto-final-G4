
import React from 'react';
import Checkbox from './../components/Checkbox';
import DangerButton from './../components/DangerButton';
import Dropdown from './../components/Dropdown';
import InputError from './../components/InputLabel';
import Modal from './../components/Modal';
import NavLink from './../components/NavLink';
import PrimaryButton from './../components/PrimaryButton';
import ResponsiveNavLink from './../components/ResponsiveNavLink';

import SecondaryButton from './../components/SecondaryButton';

import TextInput from './../components/TextInput';




const App = () => {
    return (
        <div>
            <h1>Si esto funciona descocha el champan</h1>
            <div>
                <p>Pulsa acá para acceder al login</p>
                <button type="button">Login</button>
                <p>Palabras</p>
                <DangerButton>DANGER</DangerButton>
                <Dropdown></Dropdown>
                <InputError>ERROR MUTHAFUCKA</InputError>
                <Modal>MODALES</Modal>
                <NavLink>LINKS DE NAV</NavLink>
                <PrimaryButton>BOTONES</PrimaryButton>
                <SecondaryButton>BOTONES</SecondaryButton>
                <TextInput></TextInput>
                <ResponsiveNavLink>LINKS</ResponsiveNavLink>
            </div>
        
        </div>
    
    )
}

export default App;