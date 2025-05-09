# Kustomer Client

JavaScript and NodeJS are missing a lot of core functionalities. The goal of this library is to bring a variety of useful helpers on both NodeJS & Browser with strong **TypeScript** typing.

Missing something? Create [feature request](https://github.com/LarisLab/kustomer-client/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)!

Read [Documentation 📘](https://larislab.github.io/kustomer-client/)

## Installation

[![npm version](https://badge.fury.io/js/kustomer-client.svg)](https://www.npmjs.com/package/kustomer-client)
[![npm](https://img.shields.io/npm/dt/kustomer-client)](https://www.npmjs.com/package/kustomer-client)

### Install with NPM/yarn:

```bash
# NPM
npm install kustomer-client
# Yarn
yarn add kustomer-client
```

Import what you need:

```typescript
import * as Kustomer from 'kustomer-client'

const client = Kustomer.createClient({
    auth: 'api key',
})

const result = await Kustomer.getMessagesByConversation({
    client,
    path: {
        id: '1',
    },
}).then((v) => v.data.data)
```
