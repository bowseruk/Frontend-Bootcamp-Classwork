import App from './App'
import { shallow } from 'enzyme'


const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`)

// Test 1
it('App Component Renders Without Error', () => {
  const wrapper = shallow(<App />)
})

// Test 2
it("App Component Renders a Button", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="increment-button"]')

  expect(button.length).toBe(1)
})

// Test 3
it("Counter Starts At 0", () => {
  const wrapper = shallow(<App />)
  const count = wrapper.find('[data-test="count"]').text()

  expect(count).toBe("0")
})

// Test 4
it("Clicking Increment Button Increases Counter Display", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="increment-button"]')

  button.simulate('click')

  const count = wrapper.find('[data-test="count"]').text()

  expect(count).toBe('1')
})

// Test 5
it("App Component Renders the Counter Display", () => {
  const wrapper = shallow(<App />)
  const counterDisplay = wrapper.find('[data-test="counter-display"]')

  expect(counterDisplay.length).toBe(1)
})

// Test 6
it('App Component Renders a Decrement Button', () => {
  const wrapper = shallow(<App />)

  const button = wrapper.find('[data-test="decrement-button"]')

  button.simulate('click')

  const count = wrapper.find('[data-test="count"]').text()

  expect(count).toBe('0')
})

// Test 7
it('Count is Unable to go Below Zero and Throws Error', () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="decrement-button"]')
  const errorMessage = wrapper.find('[data-test="error-message"]').text()

  button.simulate('click')

  expect(errorMessage).toEqual('The counter can not go below zero')
})

// Test 8
it("Decrement Error Message Clears When Count Increment Higher than 0", () => {
  const wrapper = shallow(<App />)
  const errorMessage = wrapper.find('[data-test="error-message"]').text()
  const button = wrapper.find('[data-test="increment-button"]')

  button.simulate('click')
  expect(errorMessage).toEqual('')
})