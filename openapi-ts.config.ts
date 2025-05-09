import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
    input: './openapi.json',
    output: {
        path: 'src/api',
        indexFile: false,
        format: 'prettier',
    },
    plugins: [
        {
            name: '@hey-api/client-fetch',
            throwOnError: true,
        },
        {
            name: '@hey-api/sdk',
            client: false,
            auth: false,
        },
    ],
})
