const Footer = ({ openTime, closeTime, isOpen }) => {
    return (
        <footer className="footer">
            <div className="order">
                <p>{!isOpen
                    ? `Sorry we're closed to ${openTime}`
                    : `Were open from ${openTime}:00 to ${closeTime}:00. Come visit us or order online.`}
                </p>
                <button className="btn">order</button>

            </div>

        </footer>);
}

export default Footer;