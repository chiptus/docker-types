/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the daemon's firewalling configuration.
 *
 * This field is currently only used on Linux, and omitted on other platforms.
 *
 */
export type FirewallInfo = {
    /**
     * The name of the firewall backend driver.
     *
     */
    Driver?: string;
    /**
     * Information about the firewall backend, provided as
     * "label" / "value" pairs.
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field, including the
     * > formatting of values and labels, should not be considered stable,
     * > and may change without notice.
     *
     */
    Info?: Array<Array<string>>;
};

