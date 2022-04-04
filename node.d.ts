declare namespace NodeJS {
    interface Porcess {
        isServer:boolean
    }

    interface ProcessEnv {
        PORT: number
    }
}