/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndexInfo } from './IndexInfo';

/**
 * RegistryServiceConfig stores daemon registry services configuration.
 *
 */
export type RegistryServiceConfig = {
    /**
     * List of IP ranges to which nondistributable artifacts can be pushed,
     * using the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).
     *
     * <p><br /></p>
     *
     * > **Deprecated**: Pushing nondistributable artifacts is now always enabled
     * > and this field is always `null`. This field will be removed in a API v1.49.
     *
     */
    AllowNondistributableArtifactsCIDRs?: Array<string>;
    /**
     * List of registry hostnames to which nondistributable artifacts can be
     * pushed, using the format `<hostname>[:<port>]` or `<IP address>[:<port>]`.
     *
     * <p><br /></p>
     *
     * > **Deprecated**: Pushing nondistributable artifacts is now always enabled
     * > and this field is always `null`. This field will be removed in a API v1.49.
     *
     */
    AllowNondistributableArtifactsHostnames?: Array<string>;
    /**
     * List of IP ranges of insecure registries, using the CIDR syntax
     * ([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries
     * accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates
     * from unknown CAs) communication.
     *
     * By default, local registries (`::1/128` and `127.0.0.0/8`) are configured as
     * insecure. All other registries are secure. Communicating with an
     * insecure registry is not possible if the daemon assumes that registry
     * is secure.
     *
     * This configuration override this behavior, insecure communication with
     * registries whose resolved IP address is within the subnet described by
     * the CIDR syntax.
     *
     * Registries can also be marked insecure by hostname. Those registries
     * are listed under `IndexConfigs` and have their `Secure` field set to
     * `false`.
     *
     * > **Warning**: Using this option can be useful when running a local
     * > registry, but introduces security vulnerabilities. This option
     * > should therefore ONLY be used for testing purposes. For increased
     * > security, users should add their CA to their system's list of trusted
     * > CAs instead of enabling this option.
     *
     */
    InsecureRegistryCIDRs?: Array<string>;
    IndexConfigs?: Record<string, IndexInfo>;
    /**
     * List of registry URLs that act as a mirror for the official
     * (`docker.io`) registry.
     *
     */
    Mirrors?: Array<string>;
};

