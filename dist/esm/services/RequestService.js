var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Function to send a simple GET request
 */
export const simpleRequest = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url, {
        method: 'GET'
    });
    if (response.status !== 200) {
        throw Error('fetching failed');
    }
    try {
        return yield response.json();
    }
    catch (e) {
        // if json paring fails, return the response
        return response;
    }
});
/**
 * Function to send an api request
 */
export const sendRequest = (_a) => __awaiter(void 0, [_a], void 0, function* ({ method, url, body, params }) {
    const response = yield fetch(params ? mapParams(url, params) : url, {
        method,
        // check if needed
        body: typeof body === 'string' ? body : JSON.stringify(body)
    });
    if (response.status !== 200) {
        throw Error('fetching failed');
    }
    try {
        return yield response.json();
    }
    catch (e) {
        // if json paring fails, return the response
        return response;
    }
});
/**
 * Function to send an api request with a header
 */
export const sendHeadRequest = (_a) => __awaiter(void 0, [_a], void 0, function* ({ method, url, body, params, headers }) {
    const response = yield fetch(params ? mapParams(url, params) : url, {
        method,
        // check if needed
        body: typeof body === 'string' ? body : JSON.stringify(body),
        headers: headers
    });
    if (response.status !== 200) {
        throw Error('fetching failed');
    }
    try {
        return yield response.json();
    }
    catch (e) {
        // if json paring fails, return the response
        return response;
    }
});
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
//# sourceMappingURL=RequestService.js.map