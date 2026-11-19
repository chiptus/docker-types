/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CPU throttling stats of the container.
 *
 * This type is Linux-specific and omitted for Windows containers.
 *
 */
export type ContainerThrottlingData = {
    /**
     * Number of periods with throttling active.
     *
     */
    periods?: number;
    /**
     * Number of periods when the container hit its throttling limit.
     *
     */
    throttled_periods?: number;
    /**
     * Aggregated time (in nanoseconds) the container was throttled for.
     *
     */
    throttled_time?: number;
};

