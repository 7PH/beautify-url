**beautify-url** is an opinionated, security-oriented library that transforms URLs into shorter, more aesthetic forms without compromising their functionality or security.

## Installation

```bash
npm i --save beautify-url
# or
yarn add beautify-url
```

## Usage

Import the `beautifyUrl` function and use it to transform URLs:

```javascript
import beautifyUrl from 'beautify-url';

console.log(beautifyUrl('https://google.com'));
// Outputs: 'google.com'

console.log(beautifyUrl('ftp://google.com'));
// Outputs: 'ftp://google.com'

console.log(beautifyUrl('https://google.com?q=long&with=very-long-last-value'));
// Outputs: 'google.com?[..]value'

console.log(beautifyUrl('not an URL'));
// Outputs: 'not an URL'
```

## Contributing

Having trouble? Found a bug? Want to contribute? Any kind of contribution is welcome. If you have any questions, please open an issue or create a pull request.

## License

This project is licensed under the MIT License.
