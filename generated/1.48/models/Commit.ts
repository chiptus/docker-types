/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Commit holds the Git-commit (SHA1) that a binary was built from, as
 * reported in the version-string of external tools, such as `containerd`,
 * or `runC`.
 *
 */
export type Commit = {
    /**
     * Actual commit ID of external tool.
     */
    ID?: string;
    /**
     * Commit ID of external tool expected by dockerd as set at build time.
     *
     * **Deprecated**: This field is deprecated and will be omitted in a API v1.49.
     *
     */
    Expected?: string;
};

