/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec)
 * runtime.
 *
 * The runtime is invoked by the daemon via the `containerd` daemon. OCI
 * runtimes act as an interface to the Linux kernel namespaces, cgroups,
 * and SELinux.
 *
 */
export type Runtime = {
    /**
     * Name and, optional, path, of the OCI executable binary.
     *
     * If the path is omitted, the daemon searches the host's `$PATH` for the
     * binary and uses the first result.
     *
     */
    path?: string;
    /**
     * List of command-line arguments to pass to the runtime when invoked.
     *
     */
    runtimeArgs?: Array<string> | null;
    /**
     * Information specific to the runtime.
     *
     * While this API specification does not define data provided by runtimes,
     * the following well-known properties may be provided by runtimes:
     *
     * `org.opencontainers.runtime-spec.features`: features structure as defined
     * in the [OCI Runtime Specification](https://github.com/opencontainers/runtime-spec/blob/main/features.md),
     * in a JSON string representation.
     *
     * <p><br /></p>
     *
     * > **Note**: The information returned in this field, including the
     * > formatting of values and labels, should not be considered stable,
     * > and may change without notice.
     *
     */
    status?: Record<string, string> | null;
};

