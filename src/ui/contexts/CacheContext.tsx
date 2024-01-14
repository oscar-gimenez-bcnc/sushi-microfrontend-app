import { type IUser } from '@/domain/models/IUser';
import { createContext } from 'react';

interface ICacheContext {
  actions: ICacheActions;
}

const CacheContext = createContext<ICacheContext>({
  actions: {
    getUsersCacheData: () => undefined,
    renewUsersExpiryDate: () => {},
    getUserCache: () => undefined,
    setUserCache: () => {},
    clearUsersCache: () => {}
  }
});

interface CacheProviderProps {
  children: React.ReactNode;
}

const CacheProvider: React.FC<CacheProviderProps> = ({ children }) => {
  const cache: IUsersCacheData = { expiry: new Date(), users: new Map<number, IUserCacheItem>() };

  const getUsersCacheData = (): IUsersCacheData => {
    return cache;
  };

  const renewUsersExpiryDate = (): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + 10); // TTL set in 10 seconds
    cache.expiry = expiryDate;
  };

  const getUserCache = (key: number): IUser | undefined => {
    const cacheValue = cache.users.get(key);
    if (cacheValue == null) return undefined;
    if (new Date().getTime() > cacheValue.expiry.getTime()) {
      cache.users.delete(key);
      return undefined;
    }
    return cacheValue.data;
  };

  const setUserCache = (key: number, value: IUser): void => {
    const expiryDate = new Date();
    expiryDate.setSeconds(expiryDate.getSeconds() + 10); // TTL set in 10 seconds
    cache.users.set(key, {
      expiry: expiryDate,
      data: value
    });
  };

  const clearUsersCache = (): void => {
    cache.users.clear();
  };

  const contextValue = {
    actions: {
      getUsersCacheData,
      renewUsersExpiryDate,
      getUserCache,
      setUserCache,
      clearUsersCache
    }
  };

  return <CacheContext.Provider value={contextValue}>{children}</CacheContext.Provider>;
};

export { CacheContext, CacheProvider };
