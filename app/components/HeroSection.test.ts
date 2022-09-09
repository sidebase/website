import { describe, expect, test } from 'vitest'
import HeroSection from './HeroSection.vue'
import { render } from '~/tests/testingLibraryVue'

describe('HeroSection', () => {
  test('mounts and is still the same', () => {
    const { html } = render(HeroSection)
    expect(html()).toMatchSnapshot()
  })
})
