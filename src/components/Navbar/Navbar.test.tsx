import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom'
Enzyme.configure({ adapter: new Adapter() });

describe("Navbar testing", () => {

  let wrapper:any;
  beforeEach(() => {
    wrapper = shallow(<Navbar/>);
  });

  test('navbar comportement', () => { 
    console.log(wrapper.find('.Menu').children().getElements())
    // expect(wrapper.find('.Menu').children()).toHaveLength(0);
    expect(wrapper.find(".Button").text()).toContain("Sign in")
  });
})



