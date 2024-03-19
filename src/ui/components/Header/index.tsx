import { IAlbum } from '@/domain/models/IAlbum';
import { albumNotification$ } from '@/eventBus';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  window.addEventListener('albumNotificationCustomEvent', (e) => {
    const customEvent = e as CustomEvent<{ album: IAlbum }>;
    console.log('albumNotificationCustomEvent received');
    console.log(customEvent.detail);
  });

  const [lastValues, setLastValues] = useState<any[]>([]);

  /* useEffect(() => {
    console.log('albumNotification');
    console.log(albumNotification$);
    const subscription = albumNotification$.subscribe({
      next: (album: any) => {
        console.log(`Album notification RxJs received:`, album);
        lastValues.push(album);
        setLastValues(lastValues);
        console.log('Eventos recibidos:', lastValues);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []); */

  useEffect(() => {
    const handleEventEmitterFederated = (data: any) => {
      console.log('albumNotificationEventEmitterFederated received');
      console.log(data);
    };

    /* console.log('albumNotificationEventEmitterFederated received');
    console.log(albumNotification$);
    const subscription = albumNotification$.subscribe({
      next: (album: any) => {
        console.log(`Album notification RxJs received:`, album);
        lastValues.push(album);
        setLastValues(lastValues);
        console.log('Eventos recibidos:', lastValues);
      }
    }); */

    albumNotification$.on('albumNotificationEventEmitterFederated', handleEventEmitterFederated);

    return () => {
      albumNotification$.off('albumNotificationEventEmitterFederated', handleEventEmitterFederated);
    };
  }, []);

  useEffect(() => {
    const handleEventEmitter = (data: any) => {
      //FIXME: types
      console.log('albumNotificationEventEmitter received');
      console.log(data);
    };

    if (window.eventBus) {
      window.eventBus.on('albumNotificationEventEmitter', handleEventEmitter);
    }

    return () => {
      if (window.eventBus) {
        window.eventBus.off('albumNotificationEventEmitter', handleEventEmitter);
      }
    };
  }, []);

  return (
    <div className="navbar w-full bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold">
          Sushi Photos
        </Link>
        {/* <button onClick={() => albumNotification$.next({ album: 'hola' })}>Puntba</button> */}
      </div>
      <div className="navbar-end lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/review">NextJS MF (Broken)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
