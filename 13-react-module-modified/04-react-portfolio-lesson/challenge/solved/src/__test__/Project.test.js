import React from 'react';
import { mount, shallow } from 'enzyme';
import ProjectCard from '../components/ProjectCard'


const match = { params: { id: 0 } }
const wrapper = shallow(<ProjectCard match={match} />)

describe("Renders ProjectCard component without crashing", () => {
    it('Renders Project', () => {
        expect(wrapper.exists()).toBe(true)
    })
})