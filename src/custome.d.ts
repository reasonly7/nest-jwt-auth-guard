import 'express';

declare module 'express' {
  interface Request {
    user: { id: number; name: string };
  }
}
