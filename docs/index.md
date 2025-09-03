# Deploy JHipster Helm Charts example on Red Hat OpenShift

# Installation from OpenShift Dev Spaces

## Open in OpenShift Dev Spaces

[![Open](https://img.shields.io/static/v1?label=Open%20in&message=Developer%20Sandbox&logo=eclipseche&color=FDB940&labelColor=525C86)](https://workspaces.openshift.com/#https://github.com/maximilianoPizarro/workshop-pipelines/tree/main?storageType=ephemeral)

## Run tasks

When your OpenShift Dev Spaces is running, click in Workspace, Select "Run Tasks" and select devfile with containts helm charts and run app Steps.


## Open OpenShift Console

- [GitHub Page](https://developers.redhat.com/developer-sandbox)

See the OpenShift Topology.
Access to the home page to the Web App.
Get the Web App Route with "oc get route" command from the terminal.

```bash
oc get routes workshop-pipelines
```

```bash
Output
workshop-pipelines (main) $ oc get routes workshop-pipelines
NAME               HOST/PORT                                                                            PATH   SERVICES           PORT   TERMINATION     WILDCARD
workshop-pipelines   workshop-pipelines-maximilianopizarro5-dev.apps.rm2.thpm.p1.openshiftapps.com          workshop-pipelines   http   edge/Redirect   None
```

## Configure Triggers Web Hook

Access to the WebHook Settings and configure 


```bash
oc get routes ci-github
```

```bash
Output
workshop-pipelines (main) $ oc get routes ci-github
NAME        HOST/PORT                                                          PATH   SERVICES       PORT            TERMINATION     WILDCARD
ci-github   ci-github-mpizarro-dev.apps.rm2.thpm.p1.openshiftapps.com          el-ci-github   http-listener   edge/Redirect   None
```

## GitHub repository

- [GitHub Page](https://maximilianopizarro.github.io/workshop-pipelines/)
- [GitHub Repo](https://github.com/maximilianoPizarro/workshop-pipelines)


# Install From Helm Charts Command

## Charts Values Parameters


## Add repository

```bash
helm repo add workshop-pipelines https://maximilianopizarro.github.io/workshop-pipelines/
```

## Install Chart with parameters

```bash
helm install workshop-pipelines workshop-pipelines/workshop-pipelines --version "VERSION" --set route.host=workshop-pipelines-<NAMESPACE>.apps.rm2.thpm.p1.openshiftapps.com
```

```bash
Example:
helm install workshop-pipelines workshop-pipelines/workshop-pipelines --version 0.1.3
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

