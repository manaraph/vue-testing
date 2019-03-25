import Vue from 'vue';
import FancyHeading from '@/components/FancyHeading.vue'

function mountComponentWithProps(Component, propsData){
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({
        propsData
    }).$mount();

    return vm.$el;
}

describe('FancyHeading.vue', () => {
    it('Should be the correct color', () =>{
        const headingData = mountComponentWithProps(FancyHeading, {color: 'red'});
        const styleData = headingData.style.getPropertyValue('color');

        console.log(styleData);
        expect(styleData).toEqual('blue')       //This test will fail
    });

    it('should have the correct title', () => {
        const headingData = mountComponentWithProps(FancyHeading, { title: 'vue-testing' });
        const titleData = headingData.textContent;

        expect(titleData).toEqual('vue-testing');
    });
})