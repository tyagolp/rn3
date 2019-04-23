import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Test from '~/pages/Test';

const Routes = createAppContainer(
  createSwitchNavigator({
    Test,
  }),
);
export default Routes;
