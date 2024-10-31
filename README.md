# Deploy JHipster Oracle Helm Charts example on Red Hat OpenShift
<p align="left">
<img src="https://img.shields.io/badge/redhat-CC0000?style=for-the-badge&logo=redhat&logoColor=white" alt="Redhat">
<img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="kubernetes">
<img src="https://img.shields.io/badge/helm-0db7ed?style=for-the-badge&logo=helm&logoColor=white" alt="Helm">
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="shell">
<a href="https://www.linkedin.com/in/maximiliano-gregorio-pizarro-consultor-it"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" /></a>
<a href="https://artifacthub.io/packages/search?repo=ecommerce-oracle"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/ecommerce-oracle" alt="Artifact Hub" /></a>
</p>

[![Open](https://img.shields.io/static/v1?label=Open%20in&message=Developer%20Sandbox&logo=eclipseche&color=FDB940&labelColor=525C86)](https://workspaces.openshift.com/#https://github.com/maximilianoPizarro/ecommerce-oracle/tree/main?storageType=ephemeral)


<p align="left">
  <img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/ecommerce-oracle-topology.PNG?raw=true" width="900" title="Run On Openshift">
  <img src="https://github.com/maximilianoPizarro/ecommerce-oracle/blob/main/app/ecommerce-oracle-home.PNG?raw=true" width="900" title="Run On Openshift">  
</p>

# Installation

## GitHub repository

```bash
https://github.com/maximilianoPizarro/ecommerce-oracle.git
```

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
helm install ecommerce-oracle ecommerce-oracle/ecommerce-oracle --version 0.1.2
```


## Uninstall Chart

```bash
helm uninstall ecommerce-oracle
```

## Package Info

- [GitHub Page](https://maximilianopizarro.github.io/ecommerce-oracle/)
- [GitHub Repo](https://github.com/maximilianoPizarro/ecommerce-oracle)

## Package Steps

```bash
helm repo add oracle-helm-charts https://maximilianopizarro.github.io/oracle-helm-charts/
helm dependency build
helm package -u . -d charts
helm repo index .
```

