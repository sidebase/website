import { describe, expect, test } from 'vitest'
import FeatureItem from './FeatureItem.vue'
import { render } from '~/tests/testingLibraryVue'
import type { Feature } from '~/types'

const FEATURE: Feature = {
  icon: 'pi-database',
  title: 'Line 1',
  description: 'Description',
}

describe('FeatureItem', () => {
  test('mounts and is still the same', () => {
    const { html } = render(FeatureItem, { props: { feature: FEATURE } })
    expect(html()).toMatchSnapshot()
  })
})
