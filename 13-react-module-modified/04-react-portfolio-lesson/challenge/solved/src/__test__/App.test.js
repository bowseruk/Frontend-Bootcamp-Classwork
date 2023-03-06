import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home'
import ProjectDetails from '../pages/ProjectDetails'
import ProjectGallery from '../pages/ProjectGallery'
import Contact from '../pages/Contact'
import Header from '../components/Header'




describe('Renders App component without crashing', () => {
    it('Renders App', () => {
        let wrapper = shallow(<App />)

        expect(wrapper.exists()).toBe(true)
    })
    it('Renders Header component without crashing', () => {
        let wrapper = shallow(<Header />)
        expect(wrapper.exists()).toBe(true)
    })
    it('Renders Home component without crashing', () => {
        let wrapper = shallow(<Home />)
        expect(wrapper.exists()).toBe(true)
    })
    it('Renders Contact component without crashing', () => {
        let wrapper = shallow(<Contact />)
        expect(wrapper.exists()).toBe(true)
    })
})


describe('Clicking Route Links render correct component based on path', () => {
    it("Home Page Route is functional", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Home)).toHaveLength(1)
    })
    it("Contact Route is functional", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/contact/']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Contact)).toHaveLength(1)
    })
    it("ProjectGallery Page Route is functional", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/project-gallery']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(ProjectGallery)).toHaveLength(1)
    })
    it("ProjectDetails Page Route is functional", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/project/1']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(ProjectDetails)).toHaveLength(1)
    })
})