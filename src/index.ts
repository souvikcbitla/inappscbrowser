import { registerPlugin } from '@capacitor/core';

import type { InappscbrowserPlugin } from './definitions';

const Inappscbrowser = registerPlugin<InappscbrowserPlugin>('Inappscbrowser', {
  web: () => import('./web').then(m => new m.InappscbrowserWeb()),
});

export * from './definitions';
export { Inappscbrowser };
