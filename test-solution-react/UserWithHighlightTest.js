import React from "react";
import expect from "must";

import {shallow} from "enzyme";
import User from "../src-solution-react/UserWithHighlight";


describe('UserWithHighlight', function () {
  beforeEach(function () {
    this.user = shallow(<User firstName="Peter" lastName="Meier"/>);
  });

  describe('state leads to correct highlighting', function () {
    it('does not highlight the user name when the highlighted state is set to false', function () {
      this.user.setState({highlighted: false});

      const highlighted = this.user.find({style: {backgroundColor: "#FF0000"}});
      const unhighlighted = this.user.find({style: {backgroundColor: "#FFFFFF"}});

      expect(highlighted.length).to.be(0);
      expect(unhighlighted.length).to.be(1);
      expect(unhighlighted.text()).to.be("Peter");
    });

    it('highlights the user name when the highlighted state is set to true', function () {
      this.user.setState({highlighted: true});

      const highlighted = this.user.find({style: {backgroundColor: "#FF0000"}});
      const unhighlighted = this.user.find({style: {backgroundColor: "#FFFFFF"}});

      expect(highlighted.length).to.be(1);
      expect(highlighted.text()).to.be("Peter");
      expect(unhighlighted.length).to.be(0);
    });
  });

  describe('clicking adjusts the state', function () {
    it('the highlight state is initially false', () => {
      expect(this.user.state("highlighted")).to.be.false();
    });

    it('changes highlight state to true after click', () => {
      this.user.setState({highlighted: false});
      this.user.simulate("click");
      expect(this.user.state("highlighted")).to.be.true();
    });

    it('changes highlight state to false after click', () => {
      this.user.setState({highlighted: true});
      this.user.simulate("click");
      expect(this.user.state("highlighted")).to.be.false();
    });
  });
});
