# Deploy JHipster Oracle Helm Charts example on Red Hat OpenShift
<p align="left">
<img src="https://img.shields.io/badge/redhat-CC0000?style=for-the-badge&logo=redhat&logoColor=white" alt="Redhat">
<img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="kubernetes">
<img src="https://img.shields.io/badge/helm-0db7ed?style=for-the-badge&logo=helm&logoColor=white" alt="Helm">
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="shell">
<a href="https://www.linkedin.com/in/maximiliano-gregorio-pizarro-consultor-it"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" /></a>
<a href="https://artifacthub.io/packages/search?repo=ecommerce-oracle"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/ecommerce-oracle" alt="Artifact Hub" /></a>
</p>

<p align="left">
<img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/ecommerce-architect.png?raw=true" width="900" title="Run On Openshift">
</p>

# Installation from OpenShift Dev Spaces

## Open in OpenShift Dev Spaces

[![Open](https://img.shields.io/static/v1?label=Open%20in&message=Developer%20Sandbox&logo=eclipseche&color=FDB940&labelColor=525C86)](https://workspaces.openshift.com/#https://github.com/maximilianoPizarro/ecommerce-oracle/tree/main?storageType=ephemeral)

## Run tasks

When your OpenShift Dev Spaces is running, click in Workspace, Select "Run Tasks" and select devfile with containts helm charts and run app Steps.

<p align="left">  
  <img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/tasks-helm-chart.png?raw=true" width="900" title="Run On Openshift">
</p>

## Open OpenShift Console

- [Developer Sandbox](https://developers.redhat.com/developer-sandbox)

See the OpenShift Topology.

<p align="left">  
<img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/ecommerce-oracle-topology.PNG?raw=true" width="900" title="Run On Openshift">
</p>

Access to the home page to the Web App.

<p align="left">  
<img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/ecommerce-oracle-home.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

Get the Web App Route with "oc get route" command from the terminal.

```bash
oc get routes ecommerce-oracle
```

```bash
Output
ecommerce-oracle (main) $ oc get routes ecommerce-oracle
NAME               HOST/PORT                                                                            PATH   SERVICES           PORT   TERMINATION     WILDCARD
ecommerce-oracle   ecommerce-oracle-maximilianopizarro5-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com          ecommerce-oracle   http   edge/Redirect   None
```

## Configure Triggers Web Hook

Access to the WebHook Settings and configure 

<p align="left">
<img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/webhook-github.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

```bash
oc get routes ci-github
```

```bash
Output
ecommerce-oracle (main) $ oc get routes ci-github
NAME        HOST/PORT                                                          PATH   SERVICES       PORT            TERMINATION     WILDCARD
ci-github   ci-github-mpizarro-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com          el-ci-github   http-listener   edge/Redirect   None
```

## GitHub repository

- [GitHub Page](https://maximilianopizarro.github.io/ecommerce-oracle/)
- [GitHub Repo](https://github.com/maximilianoPizarro/ecommerce-oracle)


# Install From Helm Charts Command

## Charts Values Parameters


## Add repository

```bash
helm repo add ecommerce-oracle https://maximilianopizarro.github.io/ecommerce-oracle/
```

## Install Chart with parameters

```bash
helm install ecommerce-oracle ecommerce-oracle/ecommerce-oracle --version "VERSION" --set route.host=ecommerce-oracle-<NAMESPACE>.apps.sandbox-m2.ll9k.p1.openshiftapps.com
```

```bash
Example:
helm install ecommerce-oracle ecommerce-oracle/ecommerce-oracle --version 0.1.3
```


## Uninstall Chart

```bash
helm uninstall ecommerce-oracle
```


## Package Steps Local Build

```bash
helm repo add oracle-helm-charts https://maximilianopizarro.github.io/oracle-helm-charts/
helm dependency build
helm package -u . -d charts
helm repo index .
```

