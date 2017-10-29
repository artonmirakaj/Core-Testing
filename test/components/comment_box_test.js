import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  // variable that will change over time
  let component;

  // function that runs before any of our 'it' statements
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });


  // when user enters text
  describe('entering some text', () => {
    // finds textarea, when user types in textarea, they are triggering a change event, and change event is called with whatever new text is
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text in textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });


});
