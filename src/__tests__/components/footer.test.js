import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../../components/footer/index.js';

describe('<Footer/>', ()=> {
    it('Is alive at application start', () =>{
        let app = shallow(<Footer/>);
        expect(app.find('footer').exists()).toBeTruthy();
    });
    it('renders correctly', ()=> {
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});