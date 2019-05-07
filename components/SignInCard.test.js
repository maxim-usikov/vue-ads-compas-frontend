import { shallowMount } from '@vue/test-utils'

import SignInCard from './SignInCard.vue'

describe('SignInCard', () => {
  let $c

  beforeEach(() => {
    $c = shallowMount(SignInCard)
  })

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy()
  })

  it('name is `SignInCard`', () => {
    expect($c.name()).toBe('SignInCard')
  })

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot()
  })
})
