import React from 'react';
import { createRoot } from "react-dom/client";
import Home from './components/Home';


if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<Home />);
}
