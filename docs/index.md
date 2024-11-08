# Deploy JHipster Oracle Helm Charts example on Red Hat OpenShift

# Installation from OpenShift Dev Spaces

## Open in OpenShift Dev Spaces

[![Open](https://img.shields.io/static/v1?label=Open%20in&message=Developer%20Sandbox&logo=eclipseche&color=FDB940&labelColor=525C86)](https://workspaces.openshift.com/#https://github.com/maximilianoPizarro/ecommerce-oracle/tree/main?storageType=ephemeral)

## Run tasks

When your OpenShift Dev Spaces is running, click in Workspace, Select "Run Tasks" and select devfile with containts helm charts and run app Steps.


## Open OpenShift Console

- [GitHub Page](https://developers.redhat.com/developer-sandbox)

See the OpenShift Topology.
Access to the home page to the Web App.
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

