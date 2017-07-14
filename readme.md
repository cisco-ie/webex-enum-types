# webex-enum-types [![Build Status](https://travis-ci.org/cisco-ie/webex-enum-types.svg?branch=master)](https://travis-ci.org/cisco-ie/webex-enum-types)

> A JSON mappings of enumerated types for Cisco&#39;s WebEx XML API

Currently not all are listed yet, but will be listed over time. PR's are welcomed.


## Install

```
$ npm install --save webex-enum-types
```


## Usage

```js
const WEBEX_ENUMS = require('webex-enum-types');

WEBEX_ENUMS['role']; //=> ['ATTENDEE', 'PRESENTER', 'HOST', 'LIMITED'];
WEBEX_ENUMS.list() // => [ 'addressType', 'entryExitTone', ... etc]
```

Download the [JSON file](/types.json).

## API

### list()
Returns the available enumerated types

## WebEx Enumerated Types

<!-- START TABLE -->
### 8 Available Enumerated Types:

| Key | Values |
| :------ | :------ |
| `addressType` | `PERSONAL, GLOBAL` |
| `entryExitTone` | `BEEP, NOTONE, ANNOUNCENAME` |
| `joinStatus` | `REGISTER, INVITE, REJECT, ACCEPT` |
| `listStatus` | `PUBLIC, PRIVATE, UNLISTED` |
| `personType` | `VISITOR, MEMBER, PANELIST, SME, SALESTEAM` |
| `registrationStatus` | `FULL, CLOSED, WAITLIST, REGISTER` |
| `role` | `ATTENDEE, PRESENTER, HOST, LIMITED` |

<!-- END TABLE -->

## License

MIT © [Cisco Innovation Edge](https://github.com/cisco-ie/webex-enum-types)
