import Icon from '../Icon/Icon.vue'
import Collapse from './Collapse.vue'
import { mount } from '@vue/test-utils'
import CollapseItem from './CollapseItem.vue'
import { describe, test, expect } from 'vitest'

describe('Collapse', () => {
  test('Collapsee', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['1']}>
          <CollapseItem title="标题1" name="1">
            <div>内容1</div>
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            <div>内容2</div>
          </CollapseItem>
          <CollapseItem title="标题3" name="3">
            <div>内容3</div>
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['Icon']
        },
        attachTo: document.body
      }
    )
    const headers = wrapper.findAll('.z-collapse-item__header')
    const contents = wrapper.findAll('.z-collapse-item__wrapper')

    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    const firstHeader = headers[0]
    const firstConents = contents[0]

    expect(firstConents.text()).toBe('内容1')

    await firstHeader.trigger('click')
    expect(firstConents.isVisible()).toBeTruthy()
    await firstHeader.trigger('click')
    expect(firstConents.isVisible()).toBeFalsy()
  })
})
