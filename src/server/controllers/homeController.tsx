import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { Provider } from 'mobx-react';
import * as config from '../../../config/index';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';
import Store from '../../client/store';

/**
 * GET /
 */
export let index = (request: Request, response: Response, next: NextFunction) => {
  fs.readFile(path.join(config.PUBLIC_PATH, 'index.html'), 'utf8', (err, html) => {
    if (err) {
      next(err);
    }

    const state = {
      products: [
        {
          name: 'Example product',
          productNumeber: 12345,
          description: 'Lorem ipsum dolor sit amet'
        },
        {
          name: 'Another product',
          productNumeber: 12346,
          description: 'Sit amet lorem ipsum'
        }
      ]
    }

    const store = new Store(state);

    const content = html
      .replace(
        '<!--APP-->',
        renderToString(
          <Provider {...store}>
            <App />
          </Provider>
        )
      )
      .replace(
        '<!--INITIAL-STATE-->',
        `<script>window.___INITIAL_STATE___ = ${JSON.stringify(state)};</script>`
      );
  
    response.send(content);
  });
}