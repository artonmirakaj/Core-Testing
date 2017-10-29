import jsdom from 'jsdom'; // JSDom - set up jquery to work with command line, emulation/fakes the DOM/HTML at command line
import jquery from 'jquery'; // junky version of jquery
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';





// set up testing environment to run like a browser in the command line

// create fake html document, assign to global variable, window scope is global scope
// initialzes/sets up our fake browser for use in cmd line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// tell jquery to make use of this window
global.window = global.document.defaultView; 
// tells jquery dont try to reach out and find the DOM, just be responsible for this fake DOM
const $ = jquery(global.window); 








// build 'renderComponent' helper that should render a given react class

// take component class, render it, get its html, wrap with jquery element, returns jquery wrapped element
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); // produces html
}







// build helper for simulating events

$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value); // pass in new value
    }
    TestUtils.Simulate[eventName](this[0]);
}

// to call simulte
// $('div').simulate()







// set up chai-jquery
chaiJquery(chai, chai.util, $);




export { renderComponent, expect };