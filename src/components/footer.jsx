function Footer() {
    return <footer className="page-footer">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} React shop
                <a className="grey-text text-lighten-4 right" href="#!">React shop </a>
            </div>
        </div>
    </footer>
}
export { Footer };