import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [process.env.NEXT_PUBLIC_WEB_API_URL || ''],
  documents: 'src/gql/**/*.graphql',
  generates: {
    './src/gql/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    },
    './src/gql/generated/schema.graphql': {
      plugins: ['schema-ast']
    },
    './src/gql/generated/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
};

export default config;
