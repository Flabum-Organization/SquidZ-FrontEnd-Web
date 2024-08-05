
import "./CardAlert.css"

function CardAlert({type, message, details}) {

    return <div className={`card-alert ${type}`}>
        <p className="message">{message}</p>
        {details && <p className="details">{details}</p>}
    </div>
}

export{CardAlert};