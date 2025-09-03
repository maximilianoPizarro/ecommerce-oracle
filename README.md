# Deploy E-commerce Helm Charts example on Red Hat OpenShift
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

# Installation from OpenShift Dev Spaces

## Open in OpenShift Dev Spaces

[![Open](https://img.shields.io/static/v1?label=Open%20in&message=Developer%20Sandbox&logo=eclipseche&color=FDB940&labelColor=525C86)](https://workspaces.openshift.com/#https://github.com/maximilianoPizarro/workshop-pipelines/tree/main?storageType=ephemeral)

## Run tasks

When your OpenShift Dev Spaces is running, click in Workspace, Select's "Run Tasks" and devfile options with containts Helm charts Web App + Developer Hub and Steps Runnning.

<p align="left">  
  <img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/tasks-helm-chart.png?raw=true" width="900" title="Run On Openshift">
</p>

## Open OpenShift Console

- [Developer Sandbox](https://developers.redhat.com/developer-sandbox)

See the OpenShift Topology.

<p align="left">  
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/workshop-pipelines-topology.PNG?raw=true" width="900" title="Run On Openshift">
</p>

Access to the Home Page to the Web App.

<p align="left">  
<img src="https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/app/workshop-pipelines-home.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

Get the Web App Route with "oc get route" command from the terminal.

```bash
oc get routes workshop-pipelines
```

```bash
Output
workshop-pipelines (main) $ oc get routes workshop-pipelines.
NAME               HOST/PORT                                                                            PATH   SERVICES           PORT   TERMINATION     WILDCARD
workshop-pipelines   workshop-pipelines-maximilianopizarro5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com          workshop-pipelines   http   edge/Redirect   None
```

## Configure Triggers Web Hook

Access to the WebHook Settings and configure ci-github route.

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
ci-github   ci-github-mpizarro-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com          el-ci-github   http-listener   edge/Redirect   None
```

# Install Developer Hub with Helm Cli (Optional Steps)

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

Open OpenShift Web Terminal and run.
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

## Complete Parameters from files.
0. Update the developer-hub/app-config-rhdh.yaml file.

### Token GitHub 
[https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)
```bash
-->developer-hub/app-config-rhdh.yaml
    ...
    integrati0ons:
      github:
        - host: github.com
          token: <<TOKEN-GITHUB-REPO>>
    ...
```

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
      baseUrl: <<URL>> https://redhat-developer-hub- <NAMESPACE> .apps.sandbox-m2.ll9k.p1.openshiftapps.com/
      ...
```
```bash
Example:
      ...
      baseUrl: <<URL>> https://redhat-developer-hub-maximilianopizarro5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/
      ...
```

### Namespace Role Bindiging
1. Update the backstage-role-binding-service-account.yaml file.
   
```bash
-->developer-hub/backstage-role-binding-service-account.yaml
       ...
        kind: RoleBinding
        apiVersion: rbac.authorization.k8s.io/v1
        metadata:
          name: 'backstage-read-only'
          namespace: <<NAMESPACE>>
        subjects:
          - kind: User
            apiGroup: rbac.authorization.k8s.io
            name: 'system:serviceaccount: <<NAMESPACE>> :backstage-read-only'
       ...

```
```bash
Example:
       ...
        kind: RoleBinding
        apiVersion: rbac.authorization.k8s.io/v1
        metadata:
          name: 'backstage-read-only'
          namespace: maximilianopizarro5-dev
        subjects:
          - kind: User
            apiGroup: rbac.authorization.k8s.io
            name: 'system:serviceaccount:maximilianopizarro5-dev:backstage-read-only'
       ...

```

## Chart Values
2. Update the values.yaml file.
   
### Cluster Router Base

```bash
-->developer-hub/values.yaml
      ...
        global:
          clusterRouterBase: <<CLUSTER_ROUTER_BASE>>
      ...
```

```bash
Example:
      ...
        global:
          clusterRouterBase: apps.sandbox-m2.ll9k.p1.openshiftapps.com
      ...
```
### K8S_CLUSTER_URL

```bash
-->developer-hub/values.yaml
      ...
      - name: K8S_CLUSTER_URL
        value: <<K8S_CLUSTER_URL>>
      ...
```

```bash
Example:
      ...
      - name: K8S_CLUSTER_URL
        value: 'https://api.sandbox-m2.ll9k.p1.openshiftapps.com:6443'
      ...
```

Open OpenShift Web Terminal and run.
```bash
helm install redhat-developer-hub openshift-helm-charts/redhat-developer-hub -f developer-hub/values.yaml --version 1.2.2
```

```bash
Output:
bash-5.1 ~ $ helm install redhat-developer-hub openshift-helm-charts/redhat-developer-hub -f developer-hub/values.yaml --version 1.2.2
WARNING: Kubernetes configuration file is group-readable. This is insecure. Location: /home/user/.kube/config
WARNING: Kubernetes configuration file is world-readable. This is insecure. Location: /home/user/.kube/config
NAME: redhat-developer-hub
LAST DEPLOYED: Thu Aug 22 22:44:39 2024
NAMESPACE: maximilianopizarro5-dev
STATUS: deployed
REVISION: 1
```
5. Access to Developer Portal with GitHub Access.

<p align="left">
  <img src="https://github.com/maximilianoPizarro/developer-hub-on-developer-sandbox/blob/main/screenshot/developer-hub-github-access.PNG?raw=true" width="900" title="Run On Openshift">
</p>

6. Register WorkShop Pipelines Componet.

```bash
https://github.com/maximilianoPizarro/workshop-pipelines/blob/main/catalog-info.yaml
```

# Install From Helm Charts Command

## Charts Values Parameters

## Add repository

```bash
helm repo add workshop-pipelines https://maximilianopizarro.github.io/workshop-pipelines/
```

## Install Chart with parameters

```bash
helm install workshop-pipelines workshop-pipelines/workshop-pipelines --version "VERSION" --set route.host=workshop-pipelines-<NAMESPACE>.apps.sandbox-m2.ll9k.p1.openshiftapps.com
```

```bash
Example:
helm install workshop-pipelines workshop-pipelines/workshop-pipelines --version 0.1.4
```

## Uninstall Chart

```bash
helm uninstall workshop-pipelines
```

## Package Steps Local Build

```bash
helm dependency build
helm package -u . -d charts
helm repo index .
```

# Links

- [Home Page](https://maximilianopizarro.github.io/workshop-pipelines/)
- [GitHub Repo](https://github.com/maximilianoPizarro/workshop-pipelines)
