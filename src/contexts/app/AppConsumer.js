import React from 'react';

import { adopt } from 'react-adopt';

import CreateContext from '../create/CreateContext';
import FindContext from '../find/FindContext';

const AppConsumer = adopt({
  createContext: <CreateContext.Consumer />,
  findContext: <FindContext.Consumer />
});

export default AppConsumer;
