import { describe, expect, test } from 'vitest'
import Banner from './Banner.vue'
import { render } from '~/tests/testingLibraryVue'

describe('Banner', () => {
  test('mounts and is still the same', () => {
    const { html } = render(Banner)
    expect(html()).toMatchSnapshot()
  })
})
