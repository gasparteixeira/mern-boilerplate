import React from "react";
import { shallow } from "enzyme";

import { Button } from "../../components/Button";

describe('<Button />', () => {
    describe('onClick()', () => {
      test('calls the onClick handler', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(
          <Button onClick={mockOnClick} label="buttom" />
        );
        const component = wrapper.dive();
        component.find('button').simulate('click');
        expect(mockOnClick.mock.calls.length).toEqual(1);
      });
    });
  });