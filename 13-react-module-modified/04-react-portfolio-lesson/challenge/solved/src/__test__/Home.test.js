import React from 'react';
import { mount, shallow } from 'enzyme';
import Home from '../pages/Home'


describe('Home Component renders correct A tags text', () => {
    it('Renders My Name', () => {
        const wrapper = mount(<Home />)
        let nameElement = "Welcome to Mr. Spock's Portfolio Page"
        let value = wrapper.find('#name').text()
        expect(value).toEqual(nameElement)
    })
    it('Renders Link that displays GitHub text', () => {
        const wrapper = mount(<Home />)
        let nameElement = "My GitHub"
        let value = wrapper.find('#github').text()
        expect(value).toEqual(nameElement)
    })
    it('Renders Link that displays LinkedIn text', () => {
        const wrapper = mount(<Home />)
        let nameElement = "My LinkedIn"
        let value = wrapper.find('#linkedin').text()
        expect(value).toEqual(nameElement)
    })
    it('Renders Link that displays Resume text', () => {
        const wrapper = mount(<Home />)
        let nameElement = "My Resume"
        let value = wrapper.find('#resume').text()
        expect(value).toEqual(nameElement)
    })
    it('Renders Link that displays Call Me text', () => {
        const wrapper = mount(<Home />)
        let nameElement = "Call Me"
        let value = wrapper.find('#phone-number').text()
        expect(value).toEqual(nameElement)
    })
    it('Renders Link that displays Email Me text', () => {
        const wrapper = mount(<Home />)
        let nameElement = "Email Me"
        let value = wrapper.find('#email-address').text()
        expect(value).toEqual(nameElement)
    })
})

describe('Renders correct social media links', () => {
    it('Renders a link for GitHub', () => {
        let wrapper = mount(<Home />)
        let value = wrapper.find('#github').prop('href')
        expect(value).toEqual('https://github.com/mrrogercampbell')
    })
    it('Renders a link for LinkedIn', () => {
        let wrapper = mount(<Home />)
        let value = wrapper.find('#linkedin').prop('href')
        expect(value).toEqual('https://www.linkedin.com/in/mrrogercampbell/')
    })
    it('Renders a link for Resume', () => {
        let wrapper = mount(<Home />)
        let value = wrapper.find('#resume').prop('href')
        expect(value).toEqual('https://drive.google.com/file/d/1Y3I8pKG7CMY-9D1fbivfF36Bv1NHsxJG/view?usp=sharing')
    })
    it('Renders a link for Phone Number', () => {
        let wrapper = mount(<Home />)
        let value = wrapper.find('#phone-number').prop('href')
        expect(value).toEqual('tel:+155512346789')
    })
    it('Renders a link for Email Address', () => {
        let wrapper = mount(<Home />)
        let value = wrapper.find('#email-address').prop('href')
        expect(value).toEqual('mailto:spock@starfleet.com')
    })
})