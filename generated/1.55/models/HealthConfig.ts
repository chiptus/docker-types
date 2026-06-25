/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A test to perform to check that the container is healthy.
 * Healthcheck commands should be side-effect free.
 *
 */
export type HealthConfig = {
    /**
     * The test to perform. Possible values are:
     *
     * - `[]` inherit healthcheck from image or parent image
     * - `["NONE"]` disable healthcheck
     * - `["CMD", args...]` exec arguments directly
     * - `["CMD-SHELL", command]` run command with system's default shell
     *
     * A non-zero exit code indicates a failed healthcheck:
     * - `0` healthy
     * - `1` unhealthy
     * - `2` reserved (treated as unhealthy)
     * - other values: error running probe
     *
     */
    Test?: Array<string>;
    /**
     * The time to wait between checks in nanoseconds. It should be 0 or at
     * least 1000000 (1 ms). 0 means inherit.
     *
     */
    Interval?: number;
    /**
     * The time to wait before considering the check to have hung. It should
     * be 0 or at least 1000000 (1 ms). 0 means inherit.
     *
     * If the health check command does not complete within this timeout,
     * the check is considered failed and the health check process is
     * forcibly terminated without a graceful shutdown.
     *
     */
    Timeout?: number;
    /**
     * The number of consecutive failures needed to consider a container as
     * unhealthy. 0 means inherit.
     *
     */
    Retries?: number;
    /**
     * Start period for the container to initialize before starting
     * health-retries countdown in nanoseconds. It should be 0 or at least
     * 1000000 (1 ms). 0 means inherit.
     *
     */
    StartPeriod?: number;
    /**
     * The time to wait between checks in nanoseconds during the start period.
     * It should be 0 or at least 1000000 (1 ms). 0 means inherit.
     *
     */
    StartInterval?: number;
};

