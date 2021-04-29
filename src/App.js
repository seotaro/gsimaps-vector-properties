import DeckGL from '@deck.gl/react';
import { GeoJsonLayer, BitmapLayer } from '@deck.gl/layers';
import { MapView } from '@deck.gl/core';
import { MVTLayer, TileLayer } from '@deck.gl/geo-layers';
import './App.css';
import { Fragment, useState } from 'react';
import RasterTilePanel from './components/RasterTilePanel'

const INITIAL_VIEW_STATE = {
  longitude: 138.0,
  latitude: 37.0,
  zoom: 5,
  minZoom: 4,
  maxZoom: 16
};

function App() {
  const [isEnableBasemap, enableBasemap] = useState(false);

  const tooltip = (object) => {
    if (!object) {
      return null;
    }

    let info = '';

    info += '<ul>';
    info += '<li>geometry</li>';
    info += '<ul>';
    info += `<li>type: ${object.geometry.type}</li>`;
    info += `<li>coordinates.length: ${object.geometry.coordinates.length}</li>`;
    info += '</ul>';

    info += '<li>properties</li>';
    info += '<ul>';
    for (const key in object.properties) {
      const property = object.properties[key];
      info += `<li>${key} : ${property}</li>`;
    }
    info += '</ul>';
    info += '</ul>';

    return {
      html: `${info}`,
      className: 'tooltip',
      style: {
        backgroundColor: '#111111',
        color: '#eeeeee',
        opacity: 0.75,
      }
    }

  };

  return (
    <Fragment>
      <RasterTilePanel
        isEnableBasemap={isEnableBasemap}
        handleChangeEnableBasemap={
          (async (isEnable) => { enableBasemap(isEnable); })
        }
      />

      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        getTooltip={({ object }) => tooltip(object)}
        getCursor={({ isHovering }) => isHovering ? 'pointer' : 'grab'}
      >
        <TileLayer id='raster'
          data={'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'}
          minZoom={5}
          maxZoom={18}
          tileSize={256}
          opacity={1.0}
          visible={isEnableBasemap}

          renderSubLayers={props => {
            const {
              bbox: { west, south, east, north }
            } = props.tile;

            return new BitmapLayer(props, {
              data: null,
              image: props.data,
              bounds: [west, south, east, north]
            });
          }} />

        <MVTLayer
          data={`https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf`}
          minZoom={4}
          maxZoom={16}

          // tooltip を表示するにはサブレイヤーの pickable を有効にする。
          renderSubLayers={props => {
            const {
              bbox: { west, south, east, north }
            } = props.tile;

            return new GeoJsonLayer(props, {
              data: props.data,
              bounds: [west, south, east, north],
              pickable: true,
              highlightColor: [255, 127, 127],
              autoHighlight: true,
            });
          }}

          getFillColor={f => {
            switch (f.geometry.type) {
              case 'Point':
                return [96, 96, 96];
              default:
                return [192, 192, 192];
            }
          }}

          getLineColor={f => {
            switch (f.geometry.type) {
              case 'Point':
              case 'Polygon':
              case 'MultiPolygon':
                return [128, 128, 128, 0];
              default:
                return [128, 128, 128];
            }
          }}

          lineWidthMinPixels={1}

          pointRadiusScale={1}
          pointRadiusUnits={'pixels'}
          pointRadiusMinPixels={4}
        />

        <MapView id="map" controller={true} repeat >
        </MapView>
      </DeckGL>
      <div className="attribution">
        <a href="https://maps.gsi.go.jp/development/vt_expt.html"
          target="_blank"
          rel="noopener noreferrer" >
          © 国土地理院ベクトルタイル提供実験
        </a>
      </div>
    </Fragment>
  );
}

export default App;
