/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * represents system data usage for image resources.
 *
 */
export type ImagesDiskUsage = {
    /**
     * Count of active images.
     *
     */
    ActiveCount?: number;
    /**
     * Count of all images.
     *
     */
    TotalCount?: number;
    /**
     * Disk space that can be reclaimed by removing unused images.
     *
     */
    Reclaimable?: number;
    /**
     * Disk space in use by images.
     *
     */
    TotalSize?: number;
    /**
     * List of image summaries.
     *
     */
    Items?: Array<any>;
};

