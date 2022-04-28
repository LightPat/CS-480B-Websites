import './Song.css'

export default function Song(props) {
    function playOnClick() {
        alert("Playing song")
    }

    function downloadButtonClick() {
        alert("Downloading song")
    }

    function addToFavorites() {
        alert("Adding to favorites")
    }

    function handleChange() {
        props.handler(props.title)
    }

    return (
        <div id='song-parent'>
            <p id='title'>{props.title}</p>
            <p id='artist'>{props.artist}, {props.year}</p>
            <img id='artist-image' src={props.image} alt=""></img>
            <button id='play-button' onClick={playOnClick}>Play</button>
            <button id='download-button' onClick={downloadButtonClick}>Download</button>
            <button id='add-to-favorites-button' onClick={handleChange}>Add To Favorites</button>
        </div>
    )
}