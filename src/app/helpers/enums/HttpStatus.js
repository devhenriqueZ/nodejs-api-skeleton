class HttpStatus {
    static OK = 200;
    static CREATED = 201;
    static ACCEPTED = 202;
    static NO_CONTENT = 204;
    static MOVED_PERMANENTLY = 301;
    static FOUND = 302;
    static BAD_REQUEST = 400;
    static UNAUTHORIZED = 401;
    static PAYMENT_REQUIRED = 402;
    static FORBIDDEN = 403;
    static NOT_FOUND = 404;
    static METHOD_NOT_ALLOWED = 405;
    static REQUEST_TIMEOUT = 408;
    static CONFLICT = 409;
    static UNPROCESSABLE_ENTITY = 422;
    static TOO_MANY_REQUESTS = 429;
    static INTERNAL_SERVER_ERROR = 500;
    static NOT_IMPLEMENTED = 501;
    static SERVICE_UNAVAILABLE = 503;
}

export default HttpStatus;