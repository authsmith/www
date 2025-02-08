---
title: "Contribution"
description: "Payload CMS auth plugin contribution guidelines"
seo:
  title: "Contribution"
  description: "Payload CMS auth plugin contribution guidelines"
---

::section

[Contribution Guide]{.content-title}

Thank you for your interest in contributing to our project! We appreciate your time and effort in helping us improve. Please follow the guidelines below to ensure a smooth contribution process.

<br/>
<br/>

[Reporting Issues]{.content-title}

Before reporting a new issue, please:
<br/>
<br/>

::list

**1. Check Existing Issues**: First, check if a similar issue already exists (open or closed). This helps avoid duplicates and speeds up the resolution process.

<br/>

**2. Be Descriptive**: Provide a detailed description of the issue. Include the following information:
<br/>
<br/>

○ Steps to reproduce the issue.
<br/>
○ Expected and actual behavior.
<br/>
○ Any relevant logs or screenshots.
<br/>
○ Environment details (e.g., OS, browser, version of the software).
<br/>
<br/>

::

If your issue is a **feature request**, please include:

::list{.pl-4}

○ The purpose of the feature.
<br/>
○ The benefits of the feature.
<br/>
○ The motivation behind the feature request.
<br/>

::

<br/>
<br/>

[Submitting Pull Requests]{.content-title}

When submitting a pull request (PR), please follow these guidelines:

::list

**1. Fork the Repository**: Create a fork of the repository on GitHub.
<br/>

**2. Create a New Branch**: Create a new branch from `main` for your work. Use a descriptive name, such as `feat/adding-new-providers`.
<br/>

**3. Commit Messages**: Use the following commit message conventions:
<br/>
<br/>

○ `feat: adds new feature`
<br/>

○ `fix: fixes bug`
<br/>

○ `docs: adds documentation`
<br/>

○ `chore: does chore`

::

<br/>

[1. Commit Message Format]{.content-title}

At the top level, we use the following types to categorize our commits:

`feat`: New feature that adds functionality. These are automatically added to the changelog when creating new releases.
<br/>

`fix`: A fix to an existing feature. These are automatically added to the changelog when creating new releases.
<br/>

`docs`: Changes to documentation only. These do not appear in the changelog.
<br/>

`chore`: Changes to code that are neither a fix nor a feature (e.g., refactoring, adding tests, etc.). These do not appear in the changelog.

<br/>

[2. Creating the Pull Request]{.content-title}

When creating a PR, please ensure:

**1. Proper Naming**: Use a descriptive title for the PR, matching the branch name if possible.

<br/>

**2. Detailed Description**: Provide a detailed description of the changes. Include:

::list

○ The purpose of the changes.
<br/>

○ The problem being solved or the feature being added.
<br/>

○ Any relevant issue numbers (e.g., `Closes #123`).
<br/>

○ Instructions on how to test the changes.

::

<br/>

**3. Review Process**: Be prepared to engage in the review process. Respond to feedback and make necessary changes.

<br/>
<br/>

[Running the Plugin]{.content-title}

**1 Clone the Forked Plugin Repository**

Clone the repository you forked from the original project.

<br/>

**2. Install Packages**

○ Run `bun install` to install all necessary dependencies.

<br/>

**3. Build and Test the Plugin Locally**

○ Run the build command `bun build` in the root directory. This will generate a `/dist` directory.
○ Create a PayloadCMS project.
○ Import the `/dist` directory accordingly
○ Run the project using `pnpm dev`.

<br/>

**4. Building the Plugin**

Building the plugin is necessary to view any changes locally. This ensures that the output generated locally will be the same as the one generated after publishing the plugin.

We appreciate your contributions and look forward to collaborating with you! If you have any questions or need assistance, please don't hesitate to reach out. Cheers!

::
