import { describe, expect, test } from 'vitest'
import YoutubePlayer from './YoutubePlayer.vue'
import { render } from '~/tests/testingLibraryVue'

describe('YoutubePlayer', () => {
  test('mounts and is still the same', () => {
    const { html } = render(YoutubePlayer)
    expect(html()).toMatchSnapshot()
  })
})
