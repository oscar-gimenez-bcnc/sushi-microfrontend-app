import { type IAlbum } from '@/domain/models/IAlbum';
import { type IPhoto } from '@/domain/models/IPhoto';
import { type IUser } from '@/domain/models/IUser';
import { createContext } from 'react';

interface ICacheContext {
  userCacheActions: IUserCacheActions;
  albumCacheActions: IAlbumCacheActions;
  photoCacheActions: IPhotoCacheActions;
}

const CacheContext = createContext<ICacheContext>({
  userCacheActions: {
    getUsersCacheData: () => undefined,
    renewUsersExpiryDate: () => {},
    getUserCache: () => undefined,
    setUserCache: () => {},
    clearUsersCache: () => {}
  },
  albumCacheActions: {
    getAlbumsCacheData: () => undefined,
    renewAlbumsExpiryDate: () => {},
    getAlbumCache: () => undefined,
    setAlbumCache: () => {},
    clearAlbumsCache: () => {}
  },
  photoCacheActions: {
    getPhotosCacheData: () => undefined,
    renewPhotosExpiryDate: () => {},
    getPhotoCache: () => undefined,
    setPhotoCache: () => {},
    clearPhotosCache: () => {}
  }
});

interface CacheProviderProps {
  children: React.ReactNode;
}

const CacheProvider: React.FC<CacheProviderProps> = ({ children }) => {
  const userCache: IUsersCacheData = { expiry: new Date(), users: new Map<number, IUserCacheItem>() };
  const albumCache: IAlbumsCacheData = { expiry: new Date(), albums: new Map<number, IAlbumCacheItem>() };
  const photoCache: IPhotosCacheData = { expiry: new Date(), photos: new Map<number, IPhotoCacheItem>() };

  const cacheDurationInSeconds = 10;

  // Users
  const getUsersCacheData = (): IUsersCacheData => {
    return userCache;
  };

  const renewUsersExpiryDate = (): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + cacheDurationInSeconds);
    userCache.expiry = expiryDate;
  };

  const getUserCache = (key: number): IUser | undefined => {
    const cacheValue = userCache.users.get(key);
    if (cacheValue == null) return undefined;
    if (new Date().getTime() > cacheValue.expiry.getTime()) {
      userCache.users.delete(key);
      return undefined;
    }
    return cacheValue.data;
  };

  const setUserCache = (key: number, value: IUser): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + cacheDurationInSeconds);
    userCache.users.set(key, {
      expiry: expiryDate,
      data: value
    });
  };

  const clearUsersCache = (): void => {
    userCache.users.clear();
  };

  // Albums
  const getAlbumsCacheData = (): IAlbumsCacheData => {
    return albumCache;
  };

  const renewAlbumsExpiryDate = (): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + cacheDurationInSeconds);
    albumCache.expiry = expiryDate;
  };

  const getAlbumCache = (key: number): IAlbum | undefined => {
    const cacheValue = albumCache.albums.get(key);
    if (cacheValue == null) return undefined;
    if (new Date().getTime() > cacheValue.expiry.getTime()) {
      albumCache.albums.delete(key);
      return undefined;
    }
    return cacheValue.data;
  };

  const setAlbumCache = (key: number, value: IAlbum): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + cacheDurationInSeconds);
    albumCache.albums.set(key, {
      expiry: expiryDate,
      data: value
    });
  };

  const clearAlbumsCache = (): void => {
    albumCache.albums.clear();
  };

  // Photos
  const getPhotosCacheData = (): IPhotosCacheData => {
    return photoCache;
  };

  const renewPhotosExpiryDate = (): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + cacheDurationInSeconds);
    photoCache.expiry = expiryDate;
  };

  const getPhotoCache = (key: number): IPhoto | undefined => {
    const cacheValue = photoCache.photos.get(key);
    if (cacheValue == null) return undefined;
    if (new Date().getTime() > cacheValue.expiry.getTime()) {
      photoCache.photos.delete(key);
      return undefined;
    }
    return cacheValue.data;
  };

  const setPhotoCache = (key: number, value: IPhoto): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + cacheDurationInSeconds);
    photoCache.photos.set(key, {
      expiry: expiryDate,
      data: value
    });
  };

  const clearPhotosCache = (): void => {
    photoCache.photos.clear();
  };

  const contextValue = {
    userCacheActions: {
      getUsersCacheData,
      renewUsersExpiryDate,
      getUserCache,
      setUserCache,
      clearUsersCache
    },
    albumCacheActions: {
      getAlbumsCacheData,
      renewAlbumsExpiryDate,
      getAlbumCache,
      setAlbumCache,
      clearAlbumsCache
    },
    photoCacheActions: {
      getPhotosCacheData,
      renewPhotosExpiryDate,
      getPhotoCache,
      setPhotoCache,
      clearPhotosCache
    }
  };

  return <CacheContext.Provider value={contextValue}>{children}</CacheContext.Provider>;
};

export { CacheContext, CacheProvider };
