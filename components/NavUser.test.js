import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'

import NavUser from './NavUser.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NavUser', () => {
  let $c
  let getters
  let store

  beforeEach(() => {
    getters = {
      isAuthenticated: () => true,
      me: () => ({ email: 'test@test.test' })
    }

    store = new Store({
      getters
    })

    $c = shallowMount(NavUser, { store, localVue })
  })

  it('is a Vue instance', () => {
    expect($c.isVueInstance()).toBeTruthy()
  })

  it('name is `NavUser`', () => {
    expect($c.name()).toBe('NavUser')
  })

  it('renders correctly', () => {
    expect($c.element).toMatchSnapshot()
  })
})
