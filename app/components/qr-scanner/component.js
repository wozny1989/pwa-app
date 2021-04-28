import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

export default class MenuComponent extends Component {
  @tracked cameraId;
  @tracked cameras;
  @tracked result;
  @tracked showModal = false;
  @tracked isCopied = false;

  @action
  onScanSuccess(result) {
    this.result = result;
    this.showModal = true;
  }

  @action
  onScanError() {}

  @action
  onCamerasFound(cameras) {
    this.cameras = cameras;
    this.cameraId = cameras[0].deviceId;
  }

  @action
  onCamerasError() {}

  @action
  toggleCamera() {
    const [index] = this.cameras.reduce((acc, camera, index) => {
      if (camera.deviceId === this.cameraId) {
        return [...acc, index];
      }
      return acc;
    }, []);

    if (this.cameras.length > index + 1) {
      this.cameraId = this.cameras[index + 1].deviceId;
    } else {
      this.cameraId = this.cameras[0].deviceId;
    }
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  copyToClipboard() {
    const copyElement = document.createElement('textarea');
    copyElement.value = this.result;
    document.body.appendChild(copyElement);
    copyElement.select();
    copyElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(copyElement);
    this.isCopied = true;
    later(() => {
      this.isCopied = false;
    }, 1000);
  }
}
