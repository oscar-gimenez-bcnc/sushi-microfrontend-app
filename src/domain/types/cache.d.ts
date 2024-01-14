interface IUsersCacheData {
  expiry: Date;
  users: Map<number, IUserCacheItem>;
}

interface IUserCacheItem {
  expiry: Date;
  data: IUser;
}

interface IUserCacheActions {
  getUsersCacheData: () => IUsersCacheData | undefined;
  renewUsersExpiryDate: () => void;
  getUserCache: (key: number) => IUser | undefined;
  setUserCache: (key: number, value: IUser) => void;
  clearUsersCache: () => void;
}

interface IAlbumsCacheData {
  expiry: Date;
  albums: Map<number, IAlbumCacheItem>;
}

interface IAlbumCacheItem {
  expiry: Date;
  data: IAlbum;
}

interface IAlbumCacheActions {
  getAlbumsCacheData: () => IAlbumsCacheData | undefined;
  renewAlbumsExpiryDate: () => void;
  getAlbumCache: (key: number) => IAlbum | undefined;
  setAlbumCache: (key: number, value: IAlbum) => void;
  clearAlbumsCache: () => void;
}

interface IPhotosCacheData {
  expiry: Date;
  photos: Map<number, IPhotoCacheItem>;
}

interface IPhotoCacheItem {
  expiry: Date;
  data: IPhoto;
}

interface IPhotoCacheActions {
  getPhotosCacheData: () => IPhotosCacheData | undefined;
  renewPhotosExpiryDate: () => void;
  getPhotoCache: (key: number) => IPhoto | undefined;
  setPhotoCache: (key: number, value: IPhoto) => void;
  clearPhotosCache: () => void;
}
