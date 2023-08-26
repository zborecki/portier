import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { buildConfig } from 'payload/config';

import { media } from './collections/media';
import { pages } from './collections/pages';
import { users } from './collections/users';

const FILE_SIZE_BYTES = 2000000; // 2MB

export default buildConfig({
  admin: { user: users.slug },
  collections: [
    media, pages, users,
  ],
  cors: ['*'],
  graphQL: { schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql') },
  plugins: [
    payloadCloud(),
  ],
  serverURL: 'http://localhost:8888',
  typescript: { outputFile: path.resolve(__dirname, 'payload-types.ts') },
  upload: {
    limits: {
      fileSize: FILE_SIZE_BYTES,
    },
  },
});
