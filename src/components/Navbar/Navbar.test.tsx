import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { screen } from '@testing-library/dom';
Enzyme.configure({ adapter: new Adapter() });
test('navbar comportement', () => {
  const wrapper = shallow(<Navbar />);
  const home = screen.getByText('home')
  expect(home).toBeInTheDocument()
})

