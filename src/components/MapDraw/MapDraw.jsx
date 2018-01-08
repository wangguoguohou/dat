import React from 'react'
import './MapDraw.scss'

class MapDraw extends React.Component {
    constructor(props) {
        super()
    }

    componentDidMount() {
        console.log('map-draw')
    }

    render() {
        return (
            <div className="map-draw">
                <div id="map" className="map">我是谷歌地图</div>
            </div>
        )
    }
}

export default MapDraw