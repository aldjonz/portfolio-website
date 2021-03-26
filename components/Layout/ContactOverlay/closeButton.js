const closeButton = (props) => (
    <div className="closeButtonContainer" onClick={props.closeOverlay}>
        <div className="closeButtonWrapper">
            <div className="closeLeft"></div>
            <div className="closeRight"></div>
        </div>
    </div>
);

export default closeButton;