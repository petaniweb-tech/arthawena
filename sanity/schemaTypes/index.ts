import { type SchemaTypeDefinition } from 'sanity'
import { BannerType } from './banner'
import { CSRType } from './csr'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BannerType, CSRType],
}
