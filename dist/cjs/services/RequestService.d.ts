type Request = {
    method: 'POST' | 'GET' | 'PUT';
    url: string;
    body?: Record<string, unknown> | string;
    params?: Record<string, string | number>;
};
/**
 * Function to send a simple GET request
 */
export declare const simpleRequest: <T>(url: Request["url"]) => Promise<T>;
/**
 * Function to send an api request
 */
export declare const sendRequest: <T>({ method, url, body, params }: Request) => Promise<T>;
/**
 * Function to send an api request with a header
 */
export declare const sendHeadRequest: <T>({ method, url, body, params, headers }: Request & {
    headers: Record<string, string>;
}) => Promise<T>;
export {};
