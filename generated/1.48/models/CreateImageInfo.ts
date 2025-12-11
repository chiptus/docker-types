/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorDetail } from './ErrorDetail';
import type { ProgressDetail } from './ProgressDetail';

export type CreateImageInfo = {
    id?: string;
    /**
     * errors encountered during the operation.
     *
     *
     * > **Deprecated**: This field is deprecated since API v1.4, and will be omitted in a future API version. Use the information in errorDetail instead.
     */
    error?: string | null;
    errorDetail?: ErrorDetail;
    status?: string;
    /**
     * Progress is a pre-formatted presentation of progressDetail.
     *
     *
     * > **Deprecated**: This field is deprecated since API v1.8, and will be omitted in a future API version. Use the information in progressDetail instead.
     */
    progress?: string | null;
    progressDetail?: ProgressDetail;
};

