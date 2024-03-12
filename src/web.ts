import { WebPlugin } from '@capacitor/core';

import type { InappscbrowserPlugin } from './definitions';

export class InappscbrowserWeb
  extends WebPlugin
  implements InappscbrowserPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
