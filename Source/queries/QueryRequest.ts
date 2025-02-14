/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Query } from './Query';
import { Guid } from '@dolittle/core';

 /**
  * Represents a request for issuing a {Query}
  */
export class QueryRequest {

    /**
     * Initializes a new instance of {QueryRequest}
     * @param {string} nameOfQuery 
     * @param {string} generatedFrom 
     * @param {*} parameters 
     */
    constructor(nameOfQuery: string, generatedFrom: string, parameters: any) {
        this.correlationId = Guid.create();
        this.nameOfQuery = nameOfQuery;
        this.generatedFrom = generatedFrom;
        this.parameters = parameters;
    }

    /**
     * Creates a {QueryRequest} from a {Query}
     * @param {Query} query 
     */
    static createFrom(query: Query) {
        let nameOfQuery: string = query.nameOfQuery;
        let generatedFrom: string = query.generatedFrom;
        delete query.nameOfQuery;
        delete query.generatedFrom;
        var request: QueryRequest = new QueryRequest(nameOfQuery, generatedFrom, query);
        return request;
    }

}