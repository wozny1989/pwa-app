import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const selleoCord = { lat: 49.81823313822142, lng: 19.044350992049903 };

export default class PoiComponent extends Component {
  @tracked lat;
  @tracked lng;
  @tracked isSelleoCord;
  @tracked zoom = 18;

  markers = [
    {
      lat: 49.81823313822142,
      lng: 19.044350992049903,
      description: 'Selleo office 💻',
    },
    {
      lat: 49.81792209103606,
      lng: 19.043926865135713,
      description: 'Triangle parking ▲',
    },
    {
      lat: 49.81847886200977,
      lng: 19.044460397248947,
      description: 'PROPPER 💀',
    },
  ];

  @action
  toggleCord({ target: { checked } }) {
    this.zoom = 18;
    if (checked) {
      return this._getSelleoCord();
    }

    this._getMyCord();
  }

  @action
  getMyCord() {
    this._getMyCord();
  }

  @action
  onClickMarker(marker) {
    this.isSelleoCord = false;
    this.lat = marker.lat;
    this.lng = marker.lng;
    this.zoom = 22;
  }

  _getMyCord() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.isSelleoCord = false;
      console.log(this.lat, this.lng);
    });
  }

  _getSelleoCord() {
    const { lat, lng } = selleoCord;
    this.lat = lat;
    this.lng = lng;
    this.isSelleoCord = true;
  }
}
