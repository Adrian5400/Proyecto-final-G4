import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function DasFooter() {
    
  
return(
    <footer className="mt-5" style={{ backgroundColor: "var(--color1)", maxWidth: "100vw", overflowX: "hidden", position: "fixed", bottom: "0", width: "100vw", padding: 'auto' }}>
        <div className="row">
            <div className="col-md-12 text-center">
                <p className="mt-3" style={{ color: "var(--color5)", fontFamily: 'verdana' }}>
                    IES Monte Naranco, marzo de 2023. Grupo: "4 Reyes". All rights reserved.
                </p>
            </div>
        </div>
    </footer>
)
}