/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Blkio stats entry.
 *
 * This type is Linux-specific and omitted for Windows containers.
 *
 */
export type ContainerBlkioStatEntry = {
    major?: number;
    minor?: number;
    op?: string;
    value?: number;
};

