import {
    type Client,
    type Config,
    createClient as createDefaultClient,
    createConfig as createDefaultConfig,
} from '@hey-api/client-fetch'

export interface KustomerClientConfig extends Pick<Config, 'fetch'> {
    subdomain?: string
    auth: string
}

export type { Client as KustomerClient } from '@hey-api/client-fetch'

export class KustomerClientError extends Error {
    code?: string
    status?: number

    constructor(message: string, code?: string, status?: number) {
        super(message)
        this.name = 'KustomerClientError'
        this.code = code
        this.status = status
    }
}

export function createKustomerClient({
    subdomain,
    auth,
    ...config
}: KustomerClientConfig): Client {
    const client = createDefaultClient(
        createDefaultConfig({
            throwOnError: true,
            baseUrl: subdomain
                ? `https://${subdomain}.api.kustomerapp.com/v1`
                : 'https://api.kustomerapp.com/v1',
            headers: {
                authorization: `Bearer ${auth}`,
                accept: 'application/json',
                'content-type': 'application/json',
            },
            ...config,
        })
    )

    client.interceptors.error.use((error) => {
        if (
            typeof error === 'object' &&
            error &&
            'errors' in error &&
            Array.isArray(error.errors)
        ) {
            const { errors } = error
            const message = errors
                .map((e) => e.title)
                .filter((v) => !!v)
                .join(', ')
            const status = errors[0].status
            const code = errors[0].code

            if (message) {
                return new KustomerClientError(message, code, status)
            }
        }

        return error instanceof Error
            ? new KustomerClientError(error.message)
            : new KustomerClientError(String(error))
    })

    return client
}
