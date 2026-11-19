/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A request for devices to be sent to device drivers
 */
export type DeviceRequest = {
    /**
     * The name of the device driver to use for this request.
     *
     * Note that if this is specified the capabilities are ignored when
     * selecting a device driver.
     *
     */
    Driver?: string;
    Count?: number;
    DeviceIDs?: Array<string>;
    /**
     * A list of capabilities; an OR list of AND lists of capabilities.
     *
     * Note that if a driver is specified the capabilities have no effect on
     * selecting a driver as the driver name is used directly.
     *
     * Note that if no driver is specified the capabilities are used to
     * select a driver with the required capabilities.
     *
     */
    Capabilities?: Array<Array<string>>;
    /**
     * Driver-specific options, specified as a key/value pairs. These options
     * are passed directly to the driver.
     *
     */
    Options?: Record<string, string>;
};

