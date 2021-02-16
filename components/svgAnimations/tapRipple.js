const tapRipple = (props) => (
    <div className="wrap" style={{ opacity: props.opacity }}>
        <div className="ripple ripple-1">
            <svg className="ripple-svg" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="24"/>
            </svg>
        </div>
        <div className="ripple ripple-3">
            <svg className="ripple-svg" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="24"/>
            </svg>
        </div>
    </div>
);

export default tapRipple;