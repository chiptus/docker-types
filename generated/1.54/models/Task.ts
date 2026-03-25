/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenericResources } from './GenericResources';
import type { ObjectVersion } from './ObjectVersion';
import type { TaskSpec } from './TaskSpec';
import type { TaskState } from './TaskState';
import type { TaskStatus } from './TaskStatus';

export type Task = {
    /**
     * The ID of the task.
     */
    ID?: string;
    Version?: ObjectVersion;
    CreatedAt?: string;
    UpdatedAt?: string;
    /**
     * Name of the task.
     */
    Name?: string;
    /**
     * User-defined key/value metadata.
     */
    Labels?: Record<string, string>;
    Spec?: TaskSpec;
    /**
     * The ID of the service this task is part of.
     */
    ServiceID?: string;
    Slot?: number;
    /**
     * The ID of the node that this task is on.
     */
    NodeID?: string;
    AssignedGenericResources?: GenericResources;
    Status?: TaskStatus;
    DesiredState?: TaskState;
    /**
     * If the Service this Task belongs to is a job-mode service, contains
     * the JobIteration of the Service this Task was created for. Absent if
     * the Task was created for a Replicated or Global Service.
     *
     */
    JobIteration?: ObjectVersion;
};

