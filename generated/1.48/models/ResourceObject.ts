/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenericResources } from './GenericResources';

/**
 * An object describing the resources which can be advertised by a node and
 * requested by a task.
 *
 */
export type ResourceObject = {
    NanoCPUs?: number;
    MemoryBytes?: number;
    GenericResources?: GenericResources;
};

