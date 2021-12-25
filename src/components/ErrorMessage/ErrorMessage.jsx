import img from "./error.gif";

const ErrorMessage = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img
                style={{
                    display: "block",
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                    margin: "0 auto"
                }}
                src={img}
                alt="Error"
            />
            <p>Error, reload the site</p>
        </div>
    );
};

export default ErrorMessage;
