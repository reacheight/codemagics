declare module 'esper.js' {
  interface EsperOptions {
    language?: string;
  }

  interface EsperStatic {
    (options?: EsperOptions): any;

    plugin(name: string): void;
  }

  const esper: EsperStatic;
  export default esper;
}
