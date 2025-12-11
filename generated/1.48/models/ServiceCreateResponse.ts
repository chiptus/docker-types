/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * contains the information returned to a client on the
 * creation of a new service.
 *
 */
export type ServiceCreateResponse = {
    /**
     * The ID of the created service.
     */
    ID?: string;
    /**
     * Optional warning message.
     *
     * FIXME(thaJeztah): this should have "omitempty" in the generated type.
     *
     */
    Warnings?: Array<string> | null;
};

