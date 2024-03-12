export interface InappscbrowserPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
