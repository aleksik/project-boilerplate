import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as config from '../../../config/index';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../client/App';

/**
 * GET /
 */
export let index = (request: Request, response: Response, next: NextFunction) => {
  fs.readFile(path.join(config.PUBLIC_PATH, 'index.html'), 'utf8', (err, html) => {
    if (err) {
      next(err);
    }

    const content = html.replace(
      '<!--APP-->',
      renderToString(<App />)
    );
  
    response.send(content);
  });
}