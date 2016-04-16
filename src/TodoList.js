'use strict';

require('bootstrap/less/bootstrap.less');

import React  from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'components/TodoList';

ReactDOM.render(<TodoList />, document.getElementById('todo-list'));
