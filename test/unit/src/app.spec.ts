import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import AppVue from '@/App.vue';

describe('App', async () => {
    test('Mount componet', async () => {
        const wrapper = mount(AppVue)

        expect(wrapper).toBeTruthy();
    })
})



