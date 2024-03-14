/* import { Subject } from 'rxjs';

export const albumNotification$ = new Subject();
 */

import { EventEmitter } from 'eventemitter3';

export const albumNotification$ = new EventEmitter();
