declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: React.HTMLAttributes<HTMLElement>;
  }
}

export {};
declare global {
  interface Window {
    pixelId?: string | null;
    sha256?: ((input: string) => string) | undefined;
  }
}