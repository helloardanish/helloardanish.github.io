---
title: Java & Spring Boot
layout: default
parent: Projects
nav_order: 1
---

# Java and Spring Boot Projects
{: .no_toc }

1. TOC
{:toc}

---

## Browser Pilot: Browser Automation Framework

**Repository:** [achhecode/browser-pilot](https://github.com/achhecode/browser-pilot)

A Java-based browser automation framework that simplifies browser interactions and keyboard-driven workflows, organizing common automation capabilities into reusable components instead of isolated scripts.

**Key features**

- Keyboard automation for typing, clicking, directional navigation, and other supported interactions
- Reusable browser management and page-resolution components
- Partial LinkedIn automation, including navigation and the games section
- Instahyre automation for profile-matched job applications
- Rule-based handling of job application questionnaires
- Task scheduling for automating operations
- API documentation and application monitoring support

**Tech:** Java 25, Spring Boot, Playwright, JNA, JNativeHook, Spring Data JPA, H2, Jackson, Lombok, Jakarta Validation, Spring Boot Actuator, Springdoc OpenAPI

**Demonstrates:** browser automation, component-based design, keyboard/mouse control, persistence, API documentation, workflow design.

---

## Task Scheduler: Persistent Task Scheduling Service

**Repository:** [helloardanish/task-scheduler](https://github.com/helloardanish/task-scheduler)

A Spring Boot application for scheduling operations to run at a future time. It is inspired by enterprise (especially banking) scheduled jobs such as transaction processing, reports, and reconciliation, and it recovers pending tasks after an application interruption instead of silently losing them.

**Key features**

- Schedule operations for future execution, with database persistence
- Recover eligible pending tasks after restarts
- Track execution status and cancel scheduled tasks
- Request validation, consistent API responses, centralized exception handling
- Base storage directory with Java NIO file validation
- Basic Authentication, JWT authentication/authorization, refresh tokens
- Role-based access control (admin vs non-admin)
- File logging with rotation, retention, and size limits
- Persistent H2 data on local disk

**Tech:** Java 25, Spring Boot, Spring Web MVC, Spring Data JPA, H2, Quartz, JWT, Actuator, Lombok, Jakarta Validation

**Implementation references**

- [Scheduling, API improvements, validation, storage, security](https://github.com/helloardanish/task-scheduler/commit/4c226f993287a5133b28ebca15753597870ee783)
- [File-based logging and rolling configuration](https://github.com/helloardanish/task-scheduler/commit/6a61b9393b910b07602f22c8f8b1eaeef486fe2d)
- [Persistent H2 database configuration](https://github.com/helloardanish/task-scheduler/commit/f2124d69bbcaf6f979b35b9fcff6f2532f21a875)
- [JWT authentication, authorization, refresh tokens](https://github.com/helloardanish/task-scheduler/commit/ca9c0db8ba291a9a04cd882bee4aa46e853f73f4)

---

## Spring Boot Multi-Module Project

**Repository:** [spring-boot-multi-module-main](https://github.com/helloardanish/spring-boot-multi-module-main)

Demonstrates a multi-module Spring Boot structure for sharing code and domain models across services, reducing duplication and clarifying boundaries between shared contracts and service-specific logic.

**Key areas:** multi-module organization, shared model/entity/DTO design, reusable components.

**Tech:** Java 21, Spring Boot 3.4.5, GraphQL, Actuator, Lombok

---

## SpineHR: One-Click Attendance Automation

**Repository:** [helloardanish/spinehr](https://github.com/helloardanish/spinehr)

A small utility that logs in to SpineHR and marks attendance as IN or OUT, showing how browser automation can remove repetitive manual steps.

**Tech:** Java 21, Spring Boot 3.2.10, Selenium, ChromeDriver

---

## Script Service: Executable Script Runner

**Repository:** [helloardanish/script-service](https://github.com/helloardanish/script-service)

A Java service for executing scripts locally or on a server, built for production-support workflows where operational scripts are run to investigate or resolve issues, exposing execution as a service instead of manual command-line work.

**Tech:** Java 21, Spring Boot 3.3.3
