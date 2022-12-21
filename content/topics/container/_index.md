---
title: Containers
lead: A container is a runnable instance of an image. 
---

A container is a runnable instance of an image. You can create, start, stop,
move, or delete a container using the Docker API or CLI. You can connect a
container to one or more networks, attach storage to it, or even create a new
image based on its current state.

By default, a container is relatively well isolated from other containers and
its host machine. You can control how isolated a container’s network, storage,
or other underlying subsystems are from other containers or from the host
machine.

A container is defined by its image as well as any configuration options you
provide to it when you create or start it. When a container is removed, any
changes to its state that are not stored in persistent storage disappear.
