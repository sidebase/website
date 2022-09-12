import { describe, expect, test } from 'vitest'
import FeatureSection from './FeatureSection.vue'
import { render } from '~/tests/testingLibraryVue'

describe('FeatureSection', () => {
  test('mounts and is still the same', () => {
    const { html } = render(FeatureSection)
    expect(html()).toMatchSnapshot()
  })
})
