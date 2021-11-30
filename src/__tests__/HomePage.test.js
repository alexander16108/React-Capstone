import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store/configureStore';
import NavBar from '../components/navbar';
import HomePage from '../pages/Homepage';

describe('Render components', () => {
  test('render NavBar', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><NavBar /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render NavBar', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><HomePage /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});