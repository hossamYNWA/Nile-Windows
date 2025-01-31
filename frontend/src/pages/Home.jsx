
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <p
                style={{
                    width: "80%",
                    margin: "200px auto 30px",
                    backgroundColor: "var(--secondary-color)",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    padding: "30px",
                    borderRadius: "10px",
                    color: "var(--primary-color)",
                }}
            >
                Order windows online at low prices. Easily configure
                made-to-measure windows online now!{" "}
            </p>
            <Link
                to="/winconfig"
                style={{
                    borderRadius: "4px",
                    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.4)",
                    boxShadow:
                        "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2)",
                    background: "var(--primary-color)",
                    color: "whitesmoke",
                    padding: "12px 15px",
                    textDecoration: "none",
                    display: "block",
                    width: "210px",
                    margin: "auto",
                    textAlign: "center",
                }}
            >
                Window configurator
            </Link>
        </>
    );
}

export default Home;
