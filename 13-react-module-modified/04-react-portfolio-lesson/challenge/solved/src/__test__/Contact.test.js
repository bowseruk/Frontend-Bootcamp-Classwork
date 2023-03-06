import React from 'react';
import { mount, shallow } from 'enzyme';
import ContactList from '../components/ContactList'
import ContactCard from '../components/ContactCard'

const contactListWrapper = mount(<ContactList />)
const contactCardWrapper = mount(<ContactCard />)

describe('ContactList Component', () => {
    it('It Renders', () => {
        expect(contactListWrapper.exists()).toBe(true)
    })

})

describe('ContactCard Component', () => {
    it('It Renders', () => {
        expect(contactCardWrapper.exists()).toBe(true)
    })

})