import { type SchemaTypeDefinition } from 'sanity'
import { BannerType } from './banner'
import { GoalType } from './goal'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BannerType, GoalType],
}
