/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Driver } from './Driver';

export type ConfigSpec = {
    /**
     * User-defined name of the config.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: Record<string, string>;
    /**
     * Data is the data to store as a config, formatted as a Base64-url-safe-encoded
     * ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)) string.
     * The maximum allowed size is 1000KB, as defined in [MaxConfigSize](https://pkg.go.dev/github.com/moby/swarmkit/v2@v2.0.0-20250103191802-8c1959736554/manager/controlapi#MaxConfigSize).
     *
     */
    Data?: string;
    /**
     * Templating driver, if applicable
     *
     * Templating controls whether and how to evaluate the config payload as
     * a template. If no driver is set, no templating is used.
     *
     */
    Templating?: Driver;
};

