/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * represents system data usage for build cache resources.
 *
 */
export type BuildCacheDiskUsage = {
    /**
     * Count of active build cache records.
     *
     */
    ActiveCount?: number;
    /**
     * Count of all build cache records.
     *
     */
    TotalCount?: number;
    /**
     * Disk space that can be reclaimed by removing inactive build cache records.
     *
     */
    Reclaimable?: number;
    /**
     * Disk space in use by build cache records.
     *
     */
    TotalSize?: number;
    /**
     * List of build cache records.
     *
     */
    Items?: Array<any>;
};

