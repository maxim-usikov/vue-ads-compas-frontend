import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import BookSearchForm from './BookSearchForm.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('BookSearchForm', () => {
  let $c

  beforeEach(() => {
    const router = new VueRouter({})
    $c = shallowMount(BookSearchForm, { localVue, router })
  })

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy()
  })

  it('name is `BookSearchForm`', () => {
    expect($c.name()).toBe('BookSearchForm')
  })

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot()
  })
})
