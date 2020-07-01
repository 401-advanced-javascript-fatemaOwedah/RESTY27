import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../../components/form/form.js';

describe('<Form />' , ()=>{
   it('Does it properly store the users input into state' ,()=>{
      let app = mount(<Form/>);
      let input = app.find('input');
      let method = app.find('#get');
      input.simulate('change',{target:{value:'https://localhost:3000'}});
      method.simulate('click');
      expect(app.state('method')).toEqual('get');
      expect(app.state('url')).toEqual('https://localhost:3000');
   });
   it('Does it properly store the users input into state' ,()=>{
    let app = mount(<Form/>);
    let input = app.find('input');
    let method = app.find('#post');
    input.simulate('change',{target:{value:'https://localhost:3000'}});
    method.simulate('click');
    expect(app.state('method')).toEqual('post');
    expect(app.state('url')).toEqual('https://localhost:3000');
   });
   it('Does it properly store the users input into state' ,()=>{
    let app = mount(<Form/>);
    let input = app.find('input');
    let method = app.find('#put');
    input.simulate('change',{target:{value:'https://localhost:3000'}});
    method.simulate('click');
    expect(app.state('method')).toEqual('put');
    expect(app.state('url')).toEqual('https://localhost:3000');
   });
   it('Does it properly store the users input into state' ,()=>{
    let app = mount(<Form/>);
    let input = app.find('input');
    let method = app.find('#delete');
    input.simulate('change',{target:{value:'https://localhost:3000'}});
    method.simulate('click');
    expect(app.state('method')).toEqual('delete');
    expect(app.state('url')).toEqual('https://localhost:3000');
   });
  it('Do the method selectors/checkboxes obey your styling rules',()=>{
    let app = mount(<Form/>);
    let method = app.find('#get');
    method.simulate('click');
    expect(app.find('.active').exists()).toBeTruthy();
   });
   it('Do the method selectors/checkboxes obey your styling rules',()=>{
    let app = mount(<Form/>);
    let method = app.find('#post');
    method.simulate('click');
    expect(app.find('.active').exists()).toBeTruthy();
   });
   it('Do the method selectors/checkboxes obey your styling rules',()=>{
    let app = mount(<Form/>);
    let method = app.find('#put');
    method.simulate('click');
    expect(app.find('.active').exists()).toBeTruthy();
   });
   it('Do the method selectors/checkboxes obey your styling rules',()=>{
    let app = mount(<Form/>);
    let method = app.find('#delete');
    method.simulate('click');
    expect(app.find('.active').exists()).toBeTruthy();
   });
});