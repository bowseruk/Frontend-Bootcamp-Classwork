import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../components/Header'


const projects = [
    {
        "id": 0,
        "description": "I wrote this long ago",
        "link": "https:www.google.com",
        "place": "Vulcan ",
        "projectType": "star-fleet-academy",
        "deployedUrl": "https://stargate.fandom.com/wiki/Chulak",
        "githubUrl": "https://github.com/sbkelly9/math-quiz",
        "tags": [
            "project"
        ],
        "title": "Star Fleet Academy Project",
        "image": "https://i0.wp.com/dianaprincexxx.com/kinkyhorror/wp-content/uploads/2015/02/spock12.gif?resize=267%2C270"
    }
]

describe("Renders Header component without crashing", () => {
    it('Renders Header', () => {
        shallow(<Header projects={projects} />)
    })
})