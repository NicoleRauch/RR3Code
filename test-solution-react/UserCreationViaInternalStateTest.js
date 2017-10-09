import React from "react";
import expect from "must";
import sinon from "sinon";

import {shallow} from "enzyme";
import UserCreation from "../src-solution-react/UserCreationViaInternalState";


describe('UserCreation', function () {
  beforeEach(function () {
    this.submit = sinon.spy();
    this.user = shallow(<UserCreation submitUser={this.submit}/>);
  });

  it("saves the firstname to the internal state", function () {
    const input = this.user.find("input").at(0);
    input.simulate("blur", {target: {value: "Nicole"}});

    expect(this.user.state("firstName")).to.eql("Nicole");
  });

  it("saves the lastname to the internal state", function () {
    const input = this.user.find("input").at(1);
    input.simulate("blur", {target: {value: "Rauch"}});

    expect(this.user.state("lastName")).to.eql("Rauch");
  });

  it("invokes the callback handler", function () {
    this.user.setState({firstName: "Nicole", lastName: "Rauch"});
    const button = this.user.find("button"); // .first();
    button.simulate("click");

    expect(this.submit.called).to.be.true();
    expect(this.submit.calledOnce).to.be.true();
    expect(this.submit.calledWith({firstName: "Nicole", lastName: "Rauch"})).to.be.true();
    expect(this.submit.getCall(0).args).to.eql([{firstName: "Nicole", lastName: "Rauch"}]); // array!
  });

  it("blackbox test", function () {
    const inputs = this.user.find("input");
    inputs.at(0).simulate("blur", {target:{value: "Nicole"}});
    inputs.at(1).simulate("blur", {target:{value: "Rauch"}});

    const button = this.user.find("button"); // .first();
    button.simulate("click");

    expect(this.submit.getCall(0).args)
      .to.eql([{firstName: "Nicole", lastName: "Rauch"}]);
  });
});
