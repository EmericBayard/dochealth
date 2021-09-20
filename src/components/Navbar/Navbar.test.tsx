const { Modal } = require("./Modal")
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';


test('navbar comportement', () => {
  const wrapper = shallow(<Navbar />);

})

