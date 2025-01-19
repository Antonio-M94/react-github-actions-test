/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_YOUR_API_USERS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
