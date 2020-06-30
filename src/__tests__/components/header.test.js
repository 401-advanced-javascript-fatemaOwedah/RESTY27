import React from 'react';
import { shallow, mount} from 'enzyme';

import Header from '../../components/header/index';

describe('<Header/>', ()=> {
    it('Is alive at application start', () =>{
        let head = shallow(<Header/>);
        expect(head.find('h1').exists()).toBeTruthy();
    });
})