import { describe, expect, test } from 'vitest'
import ContactSection from './ContactSection.vue'
import { render } from '~/tests/testingLibraryVue'

describe('ContactSection', () => {
  test('mounts and is still the same', () => {
    const { html } = render(ContactSection)
    expect(html()).toMatchSnapshot()
  })
})
