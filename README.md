# Kustomer Client

Kustomer javascript API client.

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

## Usage

```typescript
import { createKustomerClient, KustomerApi } from './src'

const client = createKustomerClient({
    subdomain: 'subdomain', // https://{subdomain}.api.kustomerapp.com
    auth: 'api key',
})

const conversations = await KustomerApi.getConversations({
    client,
    query: {
        page: 1,
        pageSize: 5,
    },
}).then((v) => v.data.data)

for (const conversation of conversations) {
    const messages = await KustomerApi.getMessagesByConversation({
        client,
        path: {
            id: conversation.id,
        },
    }).then((v) => v.data.data)

    for (const message of messages) {
        console.log(message)
    }

    await KustomerApi.updateConversation({
        client,
        path: {
            id: conversation.id,
        },
        body: {
            name: 'My new name',
        },
    })
}
```
