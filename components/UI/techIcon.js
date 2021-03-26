const techIcon = (props) => (
    <div className="techIcon" data-aos="zoom-in-up" >
        <h2>{props.title}</h2>
        <img src={props.img} alt={props.alt} />
    </div>
);

export default techIcon;