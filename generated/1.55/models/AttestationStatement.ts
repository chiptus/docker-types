/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OCIDescriptor } from './OCIDescriptor';

/**
 * AttestationStatement is a single in-toto statement attached to an image.
 *
 */
export type AttestationStatement = {
    Descriptor: OCIDescriptor;
    /**
     * The in-toto predicate type URI of this statement.
     */
    PredicateType: string;
    /**
     * The verbatim in-toto statement JSON. Only included when the caller
     * opts in via the `statement=true` query parameter; otherwise absent.
     *
     */
    Statement?: any;
};

