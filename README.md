# kth-node-access-log

Access log middleware for KTH node apps.

## Usage

```javascript
const express = require('express')
const app = express()
const accessLog = require('kth-node-access-log')

// express setup

app.use(accessLog({ useAccessLog: true }))

// later ...

app.listen(3000)

```

## Options

- `useAccessLog` toggles the access log on or off. Defaults to `false`.
- `stripHeaders` contains a list of headers that should be stripped from
  their query string before inserted into the log entry. Defaults to:
```javascript
[ 'referer', 'x-forwarded-for' ]
```
- `format` is the access log format. Defaults to:
```javascript
':remote-addr - :x-forwarded-for :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referer" ":user-agent"'
```
- `morganOptions` options passed directly to morgan. Defaults to an
  empty object.
