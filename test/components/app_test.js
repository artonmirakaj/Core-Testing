import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


// use 'describe' to group together similar tests
// first arg is string, second arg is function - all specs that are grouped with describe App, specific behavior of App
describe('App', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
