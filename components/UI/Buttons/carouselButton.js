const carouselButton = (props) => (
    <div className="carouselButton" onClick={props.click}>
        {props.text}
    </div>
);

export default carouselButton;