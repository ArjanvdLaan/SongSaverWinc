import "../CSS/Song.css"
import 'font-awesome/css/font-awesome.min.css';

const Song = (props) => {
    // console.log(props)
    return (
        <tbody>          
            <tr className="playlist">
                <th className="playlist-item">{props.song.title}</th>
                <th className="playlist-item">{props.song.artist}</th>
                <th className="playlist-item">{props.song.genre}</th>
                <th className="playlist-item">{props.song.rating}</th>
                <th className="delBtn-item">
                    <button 
                        onClick={event => props.deleteSong(event, props.song.title)}
                        className="fa fa-trash delBtn" aria-hidden="true"
                    >
                    </button>
                </th>
            </tr>        
        </tbody>
    )
}

export default Song

