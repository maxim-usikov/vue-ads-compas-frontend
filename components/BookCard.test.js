import { shallowMount } from '@vue/test-utils'

import BookCard from './BookCard.vue'

describe('BookCard', () => {
  let $c

  beforeEach(() => {
    $c = shallowMount(BookCard, {
      propsData: { title: 'test book', authors: [] }
    })
  })

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy()
  })

  it('name is `BookCard`', () => {
    expect($c.name()).toBe('BookCard')
  })

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot()
  })

  it('renders correctly with authors not empty', () => {
    $c.setProps({ authors: [{ id: 111, name: 'test author' }] })

    expect($c.element).toMatchSnapshot()
  })
})
