/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerConfig } from './ContainerConfig';
import type { GraphDriverData } from './GraphDriverData';

export type Image = {
    Id: string;
    RepoTags?: Array<string>;
    RepoDigests?: Array<string>;
    Parent: string;
    Comment: string;
    Created: string;
    Container: string;
    ContainerConfig?: ContainerConfig;
    DockerVersion: string;
    Author: string;
    Config?: ContainerConfig;
    Architecture: string;
    Os: string;
    OsVersion?: string;
    Size: number;
    VirtualSize: number;
    GraphDriver: GraphDriverData;
    RootFS: {
        Type: string;
        Layers?: Array<string>;
    };
    Metadata?: {
        LastTagTime?: string;
    };
};

