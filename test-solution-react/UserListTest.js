import React from "react";
import expect from "must";

import { shallow } from "enzyme";
import User from "../src-solution-react/User";
import UserList from "../src-solution-react/UserList";


describe('UserList', function () {
  it('displays the name that is passed to it', function () {
const users = shallow(<UserList users={[{firstName:"Petra", lastName:"Meier"}, {firstName:"Peter", lastName:"Miller"}]} />);

const elems = users.find("li");
expect(elems.length).to.be(2);

expect(elems.at(0).key()).to.be("userlist_PetraMeier");
expect(elems.at(1).key()).to.be("userlist_PeterMiller");

expect(users.children().at(0).key()).to.be("userlist_PetraMeier");
expect(users.childAt(0).key()).to.be("userlist_PetraMeier");

const users = users.find(User);
expect(users.length).to.be(2);

expect(users.at(0).key()).to.be.null();

expect(users.at(0).props()).to.eql({firstName:"Petra", lastName:"Meier"});
expect(users.at(1).props()).to.eql({firstName:"Peter", lastName:"Miller"});

expect(users.at(0).prop("firstName")).to.eql("Petra");

  });
});
