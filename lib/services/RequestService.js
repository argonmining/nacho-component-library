/**
 * Function to send a simple GET request
 */
export const simpleRequest = async (url) => {
    const response = await fetch(url, {
        method: 'GET'
    });
    if (response.status !== 200) {
        throw Error('fetching failed');
    }
    try {
        return await response.json();
    }
    catch (e) {
        // if json paring fails, return the response
        return response;
    }
};
/**
 * Function to send an api request
 */
export const sendRequest = async ({ method, url, body, params }) => {
    const response = await fetch(params ? mapParams(url, params) : url, {
        method,
        // check if needed
        body: typeof body === 'string' ? body : JSON.stringify(body)
    });
    if (response.status !== 200) {
        throw Error('fetching failed');
    }
    try {
        return await response.json();
    }
    catch (e) {
        // if json paring fails, return the response
        return response;
    }
};
/**
 * Function to send an api request with a header
 */
export const sendHeadRequest = async ({ method, url, body, params, headers }) => {
    const response = await fetch(params ? mapParams(url, params) : url, {
        method,
        // check if needed
        body: typeof body === 'string' ? body : JSON.stringify(body),
        headers: headers
    });
    if (response.status !== 200) {
        throw Error('fetching failed');
    }
    try {
        return await response.json();
    }
    catch (e) {
        // if json paring fails, return the response
        return response;
    }
};
/**
 * Function to map the url params
 */
const mapParams = (url, data) => {
    let newUrl = url;
    Object.entries(data).map(([key, value], index) => {
        if (index === 0) {
            newUrl += `?${key}=${value}`;
        }
        else {
            newUrl += `&${key}=${value}`;
        }
    });
    return newUrl;
};
