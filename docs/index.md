# WorkShop OpenShift Pipelines with Helm Charts Example on Red Hat OpenShift

<p align="left">
<img src="https://img.shields.io/badge/redhat-CC0000?style=for-the-badge&logo=redhat&logoColor=white" alt="Redhat">
<img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="kubernetes">
<img src="https://img.shields.io/badge/helm-0db7ed?style=for-the-badge&logo=helm&logoColor=white" alt="Helm">
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="shell">
<a href="https://www.linkedin.com/in/maximiliano-gregorio-pizarro-consultor-it"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" /></a>
<a href="https://artifacthub.io/packages/search?repo=workshop-pipelines"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/workshop-pipelines" alt="Artifact Hub" /></a>
</p>

<p align="left">
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/ecommerce-architect.png?raw=true" width="900" title="Run On Openshift">
</p>

# What is OpenShift Pipelines?

OpenShift Pipelines is a Kubernetes-native CI/CD solution based on Tekton. It allows you to define and run build, test, and deployment workflows using custom resources. Pipelines are composed of several objects:

- **Pipeline**: Defines the sequence of tasks to execute.
- **PipelineRun**: An instance of a Pipeline execution.
- **Task**: A reusable step in a pipeline (e.g., build, test, deploy).
- **TaskRun**: An instance of a Task execution.
- **PipelineResource**: Defines resources (e.g., Git repositories, images) used by tasks.
- **TriggerTemplate**: Template for creating PipelineRuns from events.
- **TriggerBinding**: Maps event parameters to PipelineRun parameters.
- **EventListener**: Listens for external events (e.g., GitHub webhook) and triggers pipelines.

In this Helm chart, the template includes objects related to pipelines such as `Pipeline`, `PipelineRun`, `Task`, `EventListener`, and `TriggerTemplate` to automate the CI/CD process for your application.

# Prerequisites

To deploy this example, you need a free subscription to [Red Hat Developer Sandbox](https://developers.redhat.com/developer-sandbox). Register with your Red Hat account to access an OpenShift environment for testing and development.

# Installation from OpenShift Dev Spaces

## Open in OpenShift Dev Spaces

[![Open](https://img.shields.io/static/v1?label=Open%20in&message=Developer%20Sandbox&logo=eclipseche&color=FDB940&labelColor=525C86)](https://workspaces.openshift.com/#https://github.com/maximilianoPizarro/workshop-pipelines/tree/main?storageType=ephemeral)


# Setup with OpenShift Dev Spaces

You can set up and deploy this project directly from OpenShift Dev Spaces, a cloud-based development environment integrated with OpenShift. Dev Spaces provides a pre-configured workspace and automates common development tasks using the `devfile.yaml` included in this repository.

## Devfile Tasks Overview

The `devfile.yaml` defines a comprehensive set of tasks that streamline the deployment, management, and cleanup of the application and its supporting services. These tasks are accessible from the Dev Spaces workspace interface under the "Run Tasks" menu.

### Available Tasks

- **1. Helm repo add**  
  Adds the `workshop-pipelines` Helm chart repository to your environment, making the chart available for installation.

- **2. Helm install workshop-pipelines**  
  Installs the main e-commerce application using the `workshop-pipelines` Helm chart.

- **a. Install Package of the application**  
  Installs all required npm packages for the application located in the `/app` directory.

- **b. Start Ecommerce**  
  Starts the backend e-commerce application using Maven Wrapper (`./mvnw`).

- **3. Helm add repo Developer Hub**  
  Adds the official OpenShift Helm charts repository, which includes the Red Hat Developer Hub chart.

- **4. Helm install Developer Hub v1.7.0**  
  Installs the Red Hat Developer Hub using Helm, applying custom values from `values.yaml`.

- **c. Helm package workshop-pipelines**  
  Packages the Helm chart for `workshop-pipelines`, builds dependencies, and updates the local Helm repository index.

- **d. Helm install devspaces workshop-pipelinees**  
  Installs the locally packaged `workshop-pipelines` chart from the `docs` directory using custom values.

- **5. Helm uninstall workshop-pipelines**  
  Uninstalls the `workshop-pipelines` Helm chart, removing the deployed application and its resources.

- **6. Helm uninstall Developer Hub**  
  Uninstalls the Red Hat Developer Hub from your environment.

### How to Use

1. Open the workspace in OpenShift Dev Spaces using the provided link.
2. In the workspace, click on **Workspace** > **Run Tasks**.
3. Select the desired task from the list. Each task executes the corresponding commands and scripts defined in `devfile.yaml`.
4. Monitor the output in the integrated terminal or output pane.

Each task is modular and can be run independently or in sequence, allowing you to deploy, configure, and clean up resources as needed for your development

<p align="left">  
  <img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/tasks-helm-chart.png?raw=true" width="900" title="Run On Openshift">
</p>


## Open OpenShift Console

- [Developer Sandbox](https://developers.redhat.com/developer-sandbox)

View the OpenShift Topology.

<p align="left">  
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/workshop-pipelines-topology.PNG?raw=true" width="900" title="Run On Openshift">
</p>

Access the Web App Home Page.

<p align="left">  
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/workshop-pipelines-home.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

Get the Web App route with the following command:

```bash
oc get routes workshop-pipelines
```

```bash
Output
workshop-pipelines (main) $ oc get routes workshop-pipelines.
NAME               HOST/PORT                                                                            PATH   SERVICES           PORT   TERMINATION     WILDCARD
workshop-pipelines   workshop-pipelines-maximilianopizarro5-dev.apps.rm2.thpm.p1.openshiftapps.com          workshop-pipelines   http   edge/Redirect   None
```

# Configure Triggers Web Hook

Access the WebHook settings and configure the `ci-github` route.

<p align="left">
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/webhook-github.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

```bash
oc get routes ci-github
```

```bash
Output
workshop-pipelines (main) $ oc get routes ci-github
NAME        HOST/PORT                                                          PATH   SERVICES       PORT            TERMINATION     WILDCARD
ci-github   ci-github-mpizarro-dev.apps.rm2.thpm.p1.openshiftapps.com          el-ci-github   http-listener   edge/Redirect   None
```

# Install Developer Hub with Helm CLI (Optional)

See the pipelines.
<p align="left">
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/developer-hub-ecommerce.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

Review the documentation.
<p align="left">
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/developer-hub-ecommerce-documentation.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

See the App Topology.
<p align="left">
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/developer-hub-ecommerce-kubernetes.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

See the Web App Logs.
<p align="left">
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/developer-hub-ecommerce-kubernetes-logs.PNG?raw=true" width="900" title="Run On Openshift">  
</p>



## Add OpenShift Helm Charts repo

Open the OpenShift Web Terminal and run:
```bash
helm repo add openshift-helm-charts https://charts.openshift.io/
```

```bash
Output:
bash-5.1 ~ $ helm repo add openshift-helm-charts https://charts.openshift.io/
WARNING: Kubernetes configuration file is group-readable. This is insecure. Location: /home/user/.kube/config
WARNING: Kubernetes configuration file is world-readable. This is insecure. Location: /home/user/.kube/config
"openshift-helm-charts" has been added to your repositories
```

## Deploy Developer Hub using Helm Charts Values

### OAuth GitHub Client
[https://github.com/settings/developers](https://github.com/settings/developers)

```bash
-->developer-hub/app-config-rhdh.yaml
        ...
        github:
          development:
            clientId: <<CLIENT-ID>>
            clientSecret: <<CLIENT-SECRET>>
        ...
```

### Base URL

```bash
-->developer-hub/app-config-rhdh.yaml
      ...
      baseUrl: <<URL>> https://redhat-developer-hub- <NAMESPACE> .apps.rm2.thpm.p1.openshiftapps.com/
      ...
```
```bash
Example:
      ...
      baseUrl: <<URL>> https://redhat-developer-hub-maximilianopizarro5-dev.apps.rm2.thpm.p1.openshiftapps.com/
      ...
```

Install the chart:

```bash
helm install redhat-developer-hub openshift-helm-charts/redhat-developer-hub -f developer-hub/values.yaml --version 1.2.2
```

Access the Developer Portal with GitHub access.

<p align="left">
  <img src="https://github.com/maximilianoPizarro/developer-hub-on-developer-sandbox/blob/main/screenshot/developer-hub-github-access.PNG?raw=true" width="900" title="Run On Openshift">
</p>

Register the WorkShop Pipelines component:

```bash
https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/catalog-info.yaml
```

# Install From Helm Charts Command

## Add repository

```bash
helm repo add workshop-pipelines https://maximilianopizarro.github.io/workshop-pipelines/
```

## Install Chart with parameters

```bash
helm install workshop-pipelines workshop-pipelines/workshop-pipelines --version "VERSION" --set route.host=workshop-pipelines-<NAMESPACE>.apps.rm2.thpm.p1.openshiftapps.com
```

Example:
```bash
helm install workshop-pipelines workshop-pipelines/workshop-pipelines --version 0.1.5
```

## Uninstall Chart

```bash
helm uninstall workshop-pipelines
```

# Links

- [Home Page](https://maximilianopizarro.github.io/workshop-pipelines/)
- [GitHub Repo](https://github.com/maximilianoPizarro/workshop-pipelines)

