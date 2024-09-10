import { type SchemaTypeDefinition } from 'sanity'
import { BannerType } from './banner'
import { JoinUsType } from './join-us'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BannerType, JoinUsType],
}
