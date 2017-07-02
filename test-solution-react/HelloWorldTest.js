import React from "react";
import expect from "must";

import { shallow } from "enzyme";
import HelloWorldFunctional from "../src-solution-react/HelloWorldFunctionalComponent";
import HelloWorldClass from "../src-solution-react/HelloWorldClassComponent";


describe('HelloWorldComponent', function () {
  it('checks the result\'s type and contents', function () {
    const functional = shallow(<HelloWorldFunctional />);

    expect(functional.text()).to.be("Hello World!");

    expect(functional.type()).to.be("p");

    expect(functional.name()).to.be("p");

    expect(functional.html()).to.be("<p>Hello World!</p>");

    const clazz = shallow(<HelloWorldClass/>);

    expect(clazz.text()).to.be("Hello World!");

    expect(clazz.type()).to.be("p");

    expect(clazz.name()).to.be("p");

    expect(clazz.html()).to.be("<p>Hello World!</p>");


    /*
    .find(selector) => ShallowWrapper

    Find every node in the render tree that matches the provided selector.

      .findWhere(predicate) => ShallowWrapper

    Find every node in the render tree that returns true for the provided predicate function.

    .filter(selector) => ShallowWrapper

    Remove nodes in the current wrapper that do not match the provided selector.

      .filterWhere(predicate) => ShallowWrapper

    Remove nodes in the current wrapper that do not return true for the provided predicate function.

    .contains(nodeOrNodes) => Boolean

    Returns whether or not a given node or array of nodes is somewhere in the render tree.

      .containsMatchingElement(node) => Boolean

    Returns whether or not a given react element exists in the shallow render tree.

      .containsAllMatchingElements(nodes) => Boolean

    Returns whether or not all the given react elements exists in the shallow render tree.

      .containsAnyMatchingElements(nodes) => Boolean

    Returns whether or not one of the given react elements exists in the shallow render tree.

      .equals(node) => Boolean

    Returns whether or not the current render tree is equal to the given node, based on the expected value.

      .matchesElement(node) => Boolean

    Returns whether or not a given react element matches the shallow render tree.

      .hasClass(className) => Boolean

    Returns whether or not the current node has the given class name or not.

      .is(selector) => Boolean

    Returns whether or not the current node matches a provided selector.

      .exists() => Boolean

    Returns whether or not the current node exists.

      .isEmptyRender() => Boolean

    Returns whether or not the current component returns a falsy value.

      .not(selector) => ShallowWrapper

    Remove nodes in the current wrapper that match the provided selector. (inverse of .filter())

    .children() => ShallowWrapper

    Get a wrapper with all of the children nodes of the current wrapper.

      .childAt(index) => ShallowWrapper

    Returns a new wrapper with child at the specified index.

      .parents() => ShallowWrapper

    Get a wrapper with all of the parents (ancestors) of the current node.

      .parent() => ShallowWrapper

    Get a wrapper with the direct parent of the current node.

      .closest(selector) => ShallowWrapper

    Get a wrapper with the first ancestor of the current node to match the provided selector.

      .html() => String

    Returns a static HTML rendering of the current node.

      .get(index) => ReactElement

    Returns the node at the provided index of the current wrapper.

      .getNode() => ReactElement

    Returns the wrapper's underlying node.

      .getNodes() => Array<ReactElement>

    Returns the wrapper's underlying nodes.

      .at(index) => ShallowWrapper

    Returns a wrapper of the node at the provided index of the current wrapper.

      .first() => ShallowWrapper

    Returns a wrapper of the first node of the current wrapper.

      .last() => ShallowWrapper

    Returns a wrapper of the last node of the current wrapper.

      .state([key]) => Any

    Returns the state of the root component.

      .context([key]) => Any

    Returns the context of the root component.

      .props() => Object

    Returns the props of the current node.

      .prop(key) => Any

    Returns the named prop of the current node.

      .key() => String

    Returns the key of the current node.

      .simulate(event[, data]) => ShallowWrapper

    Simulates an event on the current node.

      .setState(nextState) => ShallowWrapper

    Manually sets state of the root component.

      .setProps(nextProps) => ShallowWrapper

    Manually sets props of the root component.

      .setContext(context) => ShallowWrapper

    Manually sets context of the root component.

      .instance() => ReactComponent

    Returns the instance of the root component.

      .forEach(fn) => ShallowWrapper

    Iterates through each node of the current wrapper and executes the provided function

    .map(fn) => Array

    Maps the current array of nodes to another array.

      .reduce(fn[, initialValue]) => Any

    Reduces the current array of nodes to a value

      .reduceRight(fn[, initialValue]) => Any

    Reduces the current array of nodes to a value, from right to left.

      .slice([begin[, end]]) => ShallowWrapper

    Returns a new wrapper with a subset of the nodes of the original wrapper, according to the rules of Array#slice.

      .some(selector) => Boolean

    Returns whether or not any of the nodes in the wrapper match the provided selector.

      .someWhere(predicate) => Boolean

    Returns whether or not any of the nodes in the wrapper pass the provided predicate function.

    .every(selector) => Boolean

    Returns whether or not all of the nodes in the wrapper match the provided selector.

      .everyWhere(predicate) => Boolean

    Returns whether or not all of the nodes in the wrapper pass the provided predicate function.

*/

    //expect(JSON.stringify(result)).to.eql('{"type":"p","key":null,"ref":null,"props":{"children":"Simple Function Component"},"_owner":null,"_store":{}}');

    //expect(result.type).to.be('p');
    //expect(result.props.children).to.eql('Simple Function Component');
  });
});
