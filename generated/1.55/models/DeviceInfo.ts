/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * DeviceInfo represents a device that can be used by a container.
 *
 */
export type DeviceInfo = {
    /**
     * The origin device driver.
     *
     */
    Source?: string;
    /**
     * The unique identifier for the device within its source driver.
     * For CDI devices, this would be an FQDN like "vendor.com/gpu=0".
     *
     */
    ID?: string;
};

