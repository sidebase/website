import { describe, expect, test } from 'vitest'
import Footer from './Footer.vue'
import { render } from '~/tests/testingLibraryVue'

describe('Footer', () => {
  test('mounts and is still the same', () => {
    const { html } = render(Footer)
    expect(html()).toMatchSnapshot()
  })
})
