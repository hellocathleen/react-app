import React from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map" style={{ height: `400px`, width:`90%`}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    showInfo: ({ isOpen }) => (i) => ({
      isOpen: !isOpen,
      showInfoIndex: i,
    })
  }),
  withScriptjs,
  withGoogleMap,
)((props) =>
<div className="map">
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 48.799597, lng: -125.225464 }}
  >
  {props.locations.map((location, i) => {
  return <Marker
            key={i}
            position= {{ lat: Number(location.latitude), lng: Number(location.longitude) }}
            onClick={() => { props.showInfo(location.name)}}>

            {(props.isOpen && props.showInfoIndex == location.name) &&
            <InfoWindow onCloseClick={props.onToggleOpen}>
            <div className="info-window"> 
              {location.name} 
            </div>
            </InfoWindow>}
          </Marker>})}
  </GoogleMap>
</div>  
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
    isOpen: false
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()
  }

  render() {
    const reports = this.props.reports
        return (
      
      <MyMapComponent
        
        locations={reports}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        
      />
      
    )
  }
}

export default MyFancyComponent
