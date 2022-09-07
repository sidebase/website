import { describe, expect, test } from 'vitest'
import ShowCase from './ShowCase.vue'
import { render } from '~/tests/testingLibraryVue'

describe('ShowCase', () => {
  test('mounts and is still the same', () => {
    const { html } = render(ShowCase, { props: { nameInitialValue: 'Udo' } })
    expect(html()).toMatchSnapshot()
  })
})
