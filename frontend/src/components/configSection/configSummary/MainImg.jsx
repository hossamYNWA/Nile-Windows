import classes from "./MainImg.module.css";

const MainImg = () => {
    return (
        <div className={classes.configImgContainer}>
            {" "}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrsQxGD8gV7aJhPM-N9IHONigAsUdAhGnp6fxthP8xQ&s"
                alt="demo image"
            />
        </div>
    );
};

export default MainImg;
