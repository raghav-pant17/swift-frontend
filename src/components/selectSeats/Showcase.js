import './selectSeats.css'

export default function Showcase(){
    return (
        <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Unavailable</small>
      </li>
    </ul>
    )
}