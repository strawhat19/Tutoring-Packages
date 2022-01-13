import React from 'react';
import "./styles/footer.css";

const Footer: React.FC = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <footer className="footer red">
        <div className={`innerFooter`}>
            <div className="nameText">
                <a className="customLink" href="https://strawhat19.github.io/Whats-Your-Deal/" target="_blank" title="GitHub Pages Deployment"><i className="fab fa-github"></i> | What's Your Deal</a>
            </div>
            <div className="siteText copyright">Copyright <i className="fas fa-copyright"></i> {year}</div>
        </div>
    </footer>
    );
}
 
export default Footer;