---
title: Registries
icon: warehouse
---

A Docker registry stores Docker images. Docker Hub is a public registry that
anyone can use, and Docker is configured to look for images on Docker Hub by
default. You can even run your own private registry.

When you use the `docker pull` or `docker run` commands, the required images are
pulled from your configured registry. When you use the `docker push` command,
your image is pushed to your configured registry.
