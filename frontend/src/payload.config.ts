import path from 'path';
import { fileURLToPath } from 'url';

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload/config';
import sharp from 'sharp';

import { Users } from '$/collections/Users';
import { env } from '$/env';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users],
  editor: lexicalEditor({}),

  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: mongooseAdapter({ url: env.DATABASE_URI }),

  sharp,
});
