import { useNavigate } from "react-router-dom";
import { MyEvent } from "../../assets/event";

function EventCard(props: MyEvent) {
  const navigate = useNavigate()
  return (
    <div className="evnt" onClick={(() => navigate(`${props.id}`))}>
        <img className="evnt__pic" height={150} src={props.imgSrc} alt='' />
        <div className="evnt__content">
          <strong>{props.name}</strong>
          <div>
              {props.description}
          </div>
        </div>
        
    </div>
  );
}

export default EventCard;