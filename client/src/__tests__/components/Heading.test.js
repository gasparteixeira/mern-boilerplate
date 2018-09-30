import React from "react";
import { shallow } from 'enzyme';

import {H1, H2, H3, H4, H5}  from "../../components/Heading";

describe("Heading", () => {
    it("render H1", () => {
        const wrapper = shallow(<H1 />);
        expect(wrapper.exists()).toBe(true);
    });

    it("render H1 with text hello", () => {
        const wrapper = shallow(<H1 text="hello world"/>);
        expect(wrapper.contains("hello world")).toBe(true);
    });

    it("render H2", () => {
        const wrapper = shallow(<H2 />);
        expect(wrapper.exists()).toBe(true);
    });

    it("render H2 with text hello world", () => {
        const wrapper = shallow(<H2 text="hello world"/>);
        expect(wrapper.contains("hello world")).toBe(true);
    });

    it("render H3", () => {
        const wrapper = shallow(<H3 />);
        expect(wrapper.exists()).toBe(true);
    });

    it("render H3 with text hello world", () => {
        const wrapper = shallow(<H3 text="hello world"/>);
        expect(wrapper.contains("hello world")).toBe(true);
    });

    it("render H4", () => {
        const wrapper = shallow(<H4 />);
        expect(wrapper.exists()).toBe(true);
    });

    it("render H4 with text hello world", () => {
        const wrapper = shallow(<H4 text="hello world"/>);
        expect(wrapper.contains("hello world")).toBe(true);
    });

    it("render H5", () => {
        const wrapper = shallow(<H5 />);
        expect(wrapper.exists()).toBe(true);
    });

    it("render H5 with text hello world", () => {
        const wrapper = shallow(<H5 text="hello world"/>);
        expect(wrapper.contains("hello world")).toBe(true);
    });
})
