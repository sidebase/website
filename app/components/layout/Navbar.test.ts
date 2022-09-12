import { describe, expect, test } from 'vitest'
import Navbar from './Navbar.vue'
import { render } from '~/tests/testingLibraryVue'

describe('Navbar', () => {
  test('mounts and is still the same', () => {
    const { html } = render(Navbar)
    expect(html()).toMatchSnapshot()
  })
})
