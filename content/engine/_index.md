---
description: Engine
keywords: Engine
aliases:
  - /edge/
  - /engine/ce-ee-node-activate/
  - /engine/misc/
  - /linux/
  - /manuals/ # TODO remove this redirect after we've created a landing page for the product manuals section
linkTitle: Engine
title: Docker Engine overview
weight: 2
grid:
  - title: "Install"
    description:
      "Learn how to install the open source Docker Engine for your distribution."
    icon: "download"
    link: "/engine/install"
  - title: "Storage"
    description: "Use persistent data with Docker containers."
    icon: "database"
    link: "/engine/storage"
  - title: "Networking"
    description: "Manage network connections between containers."
    icon: "lan"
    link: "/engine/networking/"
  - title: "Container logs"
    description: "Learn how to view and read container logs."
    icon: "feed"
    link: "/engine/logging/"
  - title: "Prune"
    description: "Tidy up unused resources."
    icon: "cut"
    link: "/engine/operation/pruning"
  - title: "Configure the daemon"
    description: "Delve into the configuration options of the Docker daemon."
    icon: "tune"
    link: "/engine/config"
  - title: "Rootless mode"
    description: "Run Docker without root privileges."
    icon: "security"
    link: "/engine/config"
  - title: "Release notes"
    description: "Read the release notes for the latest version."
    icon: "note_add"
    link: "/engine/release-notes"
---

Docker Engine is an open source containerization technology for building and
containerizing your applications. Docker Engine acts as a client-server
application with:

- A server with a long-running daemon process
  [`dockerd`](/reference/commandline/dockerd).
- APIs which specify interfaces that programs can use to talk to and instruct
  the Docker daemon.
- A command line interface (CLI) client [`docker`](/reference/commandline/cli/).

The CLI uses [Docker APIs](api/index.md) to control or interact with the Docker
daemon through scripting or direct CLI commands. Many other Docker applications
use the underlying API and CLI. The daemon creates and manage Docker objects,
such as images, containers, networks, and volumes.

For more details, see
[Docker Architecture](../get-started/overview.md#docker-architecture).

{{< grid >}}
