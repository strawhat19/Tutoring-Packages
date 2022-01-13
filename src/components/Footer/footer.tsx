import React from 'react';
import "./styles/footer.css";

const Footer: React.FC = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <footer className="footer red">
        <div className={`innerFooter`}>
            <div className="nameText">
                <a className="customLink" href="https://strawhat19.github.io/Tutoring-Packages/" target="_blank" title="Tutoring Packages"><i className="fab fa-github"></i> | Tutoring Packages</a>
            </div>
            <div className="siteText copyright">Copyright <i className="fas fa-copyright"></i> {year}</div>
        </div>
    </footer>
    );
}
 
export default Footer;