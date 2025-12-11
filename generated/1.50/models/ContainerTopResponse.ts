/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Container "top" response.
 */
export type ContainerTopResponse = {
    /**
     * The ps column titles
     */
    Titles?: Array<string>;
    /**
     * Each process running in the container, where each process
     * is an array of values corresponding to the titles.
     */
    Processes?: Array<Array<string>>;
};

