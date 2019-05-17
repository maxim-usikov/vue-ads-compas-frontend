import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import BookAuthorFilterForm from './BookAuthorFilterForm.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('BookAuthorFilterForm', () => {
  let $c

  beforeEach(() => {
    const router = new VueRouter({})
    $c = shallowMount(BookAuthorFilterForm, { localVue, router })
  })

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy()
  })

  it('name is `BookAuthorFilterForm`', () => {
    expect($c.name()).toBe('BookAuthorFilterForm')
  })

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot()
  })
})
