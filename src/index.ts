const LINK_PATHNAME_TRUNCATE_LENGTH = 14;
const LINK_SEARCH_TRUNCATE_LENGTH = 10;

const ELLIPSIS = '⋯';
const ELLIPSIS_LENGTH = 1;

/**
 * Beautify a given URL protocol
 */
function beautifyProtocol(protocol: string) {
    // Drop https protocol
    if (protocol === 'https:') {
        return '';
    }
    return protocol + '//';
}

/**
 * Beautify a given URL hostname
 */
function beautifyHostname(hostname: string) {
    // Drop www
    if (hostname.startsWith('www.')) {
        return hostname.substring(4);
    }
    return hostname;
}

/**
 * Beautify a given URL path
 */
function beautifyPath(path: string) {
    // Drop root path
    if (path === '/') {
        return '';
    }

    // If short path, return it
    if (path.length < LINK_PATHNAME_TRUNCATE_LENGTH) {
        return path;
    }

    // Split path into its 'parts' and somehow show the last part
    const pathParts = path.split('/').filter((part) => part.length > 0);
    const lastPart = pathParts[pathParts.length - 1];

    // If last path part is short enough, return it
    if (lastPart.length < LINK_PATHNAME_TRUNCATE_LENGTH && pathParts.length > 2) {
        return `/${ELLIPSIS}/${lastPart}`;
    }

    // If last path part is long, truncate it
    return `/${ELLIPSIS}${lastPart.substring(lastPart.length - LINK_PATHNAME_TRUNCATE_LENGTH + ELLIPSIS_LENGTH)}`;
}

/**
 * Beautify a given URL search
 */
function beautifySearch(rawSearch: string) {
    // Drop the initial question mark
    const search = rawSearch.replace(/^\?/, '');
    if (search.length === 0) {
        return '';
    }

    // If short search, return it
    if (search.length < LINK_SEARCH_TRUNCATE_LENGTH) {
        return `?${search}`;
    }

    // If long search, truncate it
    return `?${ELLIPSIS}${search.substring(search.length - LINK_SEARCH_TRUNCATE_LENGTH + ELLIPSIS_LENGTH)}`;
}

/**
 * Beautify a given URL
 */
export default function beautifyUrl(href: string) {
    try {
        // Try and parse the URL
        const url = new URL(href);
        const protocol = beautifyProtocol(url.protocol);
        const hostname = beautifyHostname(url.hostname);
        const path = beautifyPath(url.pathname);
        const search = beautifySearch(url.search);
        return `${protocol}${hostname}${path}${search}`;
    } catch (error) {
        return href;
    }
}
