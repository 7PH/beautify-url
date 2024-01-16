import beautifyUrl from '.';

describe('protocol', () => {
    it('drop https', () => {
        expect(beautifyUrl('https://google.com')).toBe('google.com');
    });

    it('keep non-https', () => {
        expect(beautifyUrl('http://google.com')).toBe('http://google.com');
        expect(beautifyUrl('ftp://google.com')).toBe('ftp://google.com');
    });
});

describe('hostname', () => {
    it('drop www.', () => {
        expect(beautifyUrl('https://www.google.com')).toBe('google.com');
        expect(beautifyUrl('https://www.google.com/search')).toBe('google.com/search');
    });
});

describe('path', () => {
    it('drop trailing empty path', () => {
        expect(beautifyUrl('https://google.com/')).toBe('google.com');
    });

    it('keep short path', () => {
        expect(beautifyUrl('https://google.com/shortpath/')).toBe('google.com/shortpath/');
        expect(beautifyUrl('https://google.com/short/path/')).toBe('google.com/short/path/');
    });

    it('shorten long path', () => {
        expect(beautifyUrl('https://google.com/long/path/with/many/segments/and/parameters')).toBe('google.com/[..]/parameters');
        expect(beautifyUrl('https://google.com/with-very-long-last-part/')).toBe('google.com/[..]-last-part');
        expect(beautifyUrl('https://google.com/with-very-long-last-part')).toBe('google.com/[..]-last-part');
    });
});

describe('query', () => {
    it('drop empty query', () => {
        expect(beautifyUrl('https://google.com/?')).toBe('google.com');
    });

    it('keep short query', () => {
        expect(beautifyUrl('https://google.com?q=short')).toBe('google.com?q=short');
        expect(beautifyUrl('https://google.com?q=short&lang=en')).toBe('google.com?[..]ng=en');
    });

    it('shorten long query', () => {
        expect(beautifyUrl('https://google.com?q=long&with=many&parameters=and-values')).toBe('google.com?[..]alues');
        expect(beautifyUrl('https://google.com?q=long&with=very-long-last-value')).toBe('google.com?[..]value');
    });
});

describe('non-URL', () => {
    it('keep non-URL', () => {
        expect(beautifyUrl('not a URL')).toBe('not a URL');
    });
});
