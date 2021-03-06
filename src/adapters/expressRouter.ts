/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { Controller } from '../protocols/controller';
import { HttpRequest } from '../protocols/http';

const adapterRouter = (controller: Controller) => {
    return async (request: Request, response: Response) => {
        const httpRequest: HttpRequest = {
            query: request.query,
            params: request.params,
            body: request.body,
        };
        const httpResponse = await controller.handle(httpRequest);
        response.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export default adapterRouter;
