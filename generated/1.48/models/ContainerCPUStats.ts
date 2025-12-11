/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerCPUUsage } from './ContainerCPUUsage';
import type { ContainerThrottlingData } from './ContainerThrottlingData';

/**
 * CPU related info of the container
 *
 */
export type ContainerCPUStats = {
    cpu_usage?: ContainerCPUUsage;
    /**
     * System Usage.
     *
     * This field is Linux-specific and omitted for Windows containers.
     *
     */
    system_cpu_usage?: number | null;
    /**
     * Number of online CPUs.
     *
     * This field is Linux-specific and omitted for Windows containers.
     *
     */
    online_cpus?: number | null;
    throttling_data?: ContainerThrottlingData;
};

