/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerStatus } from './ContainerStatus';
import type { PortStatus } from './PortStatus';
import type { TaskState } from './TaskState';

/**
 * represents the status of a task.
 */
export type TaskStatus = {
    Timestamp?: string;
    State?: TaskState;
    Message?: string;
    Err?: string;
    ContainerStatus?: ContainerStatus;
    PortStatus?: PortStatus;
};

