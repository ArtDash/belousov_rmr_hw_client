type RequestWithParams<T> = (params: T) => Promise<any>;
type RequestWithoutParams = () => Promise<any>;

export type Request<T = unknown> = RequestWithParams<T> | RequestWithoutParams;
