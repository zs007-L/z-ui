import Button from './Button.vue'
import Icon from '../Icon/Icon.vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('Button.vue', () => {
  test('base button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'Button'
      }
    })
    /**
     * classes: 可以拿到DOM节点上得class
     * get: 遍历对应得wrapper
     */
    expect(wrapper.classes()).toContain('z-button--primary')
    expect(wrapper.get('button').text()).toBe('Button')
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disable button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        disabled: true
      },
      slots: {
        default: 'disable Button'
      }
    })
    expect(wrapper.attributes()).toBeDefined()
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toBeUndefined()
  })
  test('icon button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon Button'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        loading: true
      },
      slots: {
        default: 'loading Button'
      },
      global: {
        stubs: ['Icon']
      }
    })
    const loadingElement = wrapper.findComponent(Icon)
    expect(loadingElement.exists()).toBeTruthy()
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
