import React from 'react'
import "./featured.css"
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import im from "../images/861317.jpg"
const Featured = ({type}) => {
  return (
    <div className="featured">
       {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
          <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
       )}
        <img className="war" src={im} alt="war" />
        <div className="info">
            <img className="bg" src="https://laughingsquid.com/wp-content/uploads/2016/08/dunkirk-a-world-war-ii-action-th.jpg" alt="ok" />
            <span className="desc">During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span className="playinfo">Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span className="playinfo">Info</span>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Featured;