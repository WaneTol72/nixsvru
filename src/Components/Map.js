import React, {Component} from 'react';
let src = "https://play.nixsv.ru/:8123/index.html?worldname=world&mapname=surface&zoom=4&x=-3006&y=64&z=544";
class Map extends Component {
    render() {
        return (
            <>
                <div id="map" className="pb-5 bg-dark text-center text-white">
                <h1 className="pt-2">Карта Classic мира:</h1>
                        <iframe
                            allowFullScreen={true}
                            title="Map"
                            id="ifr"
                            style={{ height: '100vh', width: '92.5%', border: 'none', borderRadius: 10}}
                            scrolling="no"
                            src={src}
                        />
                </div>
            </>
        );
    }
}

export default Map;