import profilePic from "./assets/profile.png"

function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img className="cardImage" src={profilePic} alt="profile picture" />
             
             { props.name ? <h2 className="card-title">{props.name ? "Naveen Krishna Balaji K":"User not available"}</h2>:<p>Not available</p>}
            <p className="card-text">Hello there! I'm a Graduate Technical Intern @Trimble.inc, part of Trimble Transportation - Mobility NA</p>
        </div>
    )
}

export default Card