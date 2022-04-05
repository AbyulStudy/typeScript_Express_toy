declare namespace NodeJS {
  interface Porcess {
    isServer: boolean;
  }

  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;

    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;

    JWT_SECRET_KEY: string;
  }
}
