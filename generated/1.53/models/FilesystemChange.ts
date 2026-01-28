/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChangeType } from './ChangeType';

/**
 * Change in the container's filesystem.
 *
 */
export type FilesystemChange = {
    /**
     * Path to file or directory that has changed.
     *
     */
    Path: string;
    Kind: ChangeType;
};

