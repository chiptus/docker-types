/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`)
 */
export type GenericResources = Array<{
    NamedResourceSpec?: {
        Kind?: string;
        Value?: string;
    };
    DiscreteResourceSpec?: {
        Kind?: string;
        Value?: number;
    };
}>;
