declare module 'SushiMicroFrontendUsers/SushiMicroFrontendUsers';
declare module 'SushiMicroFrontendAlbums/SushiMicroFrontendAlbums';
declare module 'SushiMicroFrontendPhotos/SushiMicroFrontendPhotos';

import EventEmitter from 'eventemitter3';

declare global {
  interface Window {
    eventBus?: EventEmitter;
  }
}
