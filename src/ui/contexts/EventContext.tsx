import EventEmitter from 'eventemitter3';
import { createContext, useEffect } from 'react';

const EventContext = createContext({});

interface EventProviderProps {
  children: React.ReactNode;
}

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  useEffect(() => {
    if (!window.eventBus) {
      window.eventBus = new EventEmitter();
    }
  }, []);
  return <EventContext.Provider value={{}}>{children}</EventContext.Provider>;
};

export { EventContext, EventProvider };
