'use client'

// @ts-expect-error unresolvable module types
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function AdminPage() {
  return <NextStudio config={config} />
}
