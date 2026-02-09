interface ImportMetaEnv {
  readonly BASE_URL: string;
  // другие переменные окружения, если используются
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}