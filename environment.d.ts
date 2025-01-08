declare global {
    namespace NodeJS {
        interface ProcessEnv {
            START_DATE: string;
            END_DATE: string;
        }
    }
}

export {}
