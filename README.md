# Deploy Jhipster Oracle Helm Charts example on Red Hat OpenShift
<p align="left">
<img src="https://img.shields.io/badge/redhat-CC0000?style=for-the-badge&logo=redhat&logoColor=white" alt="Redhat">
<img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="kubernetes">
<img src="https://img.shields.io/badge/helm-0db7ed?style=for-the-badge&logo=helm&logoColor=white" alt="Helm">
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="shell">
<a href="https://www.linkedin.com/in/maximiliano-gregorio-pizarro-consultor-it"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" /></a>
<a href="https://artifacthub.io/packages/search?repo=botpress"><img src="https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/botpress" alt="Artifact Hub" /></a>
</p>


# Installation

## Charts Values Parameters


## Add repository

```bash
helm repo add botpress https://maximilianopizarro.github.io/botpress-helm-chart/
```

## Install Chart with parameters

```bash
helm install my-botpress botpress/botpress --version VERSION --set route.host="Your-WilcardDNS-hostname",env.EXTERNAL_URL="Your-WilcardDNS-with-https"
```

```bash
Example:
helm install my-ecommerce-oracle ecommerce-oracle/ecommerce-oracle --version 0.1.0
```


## Uninstall Chart

```bash
helm uninstall my-ecommerce-oracle
```

## Package Info

- [GitHub Page](https://maximilianopizarro.github.io/ecommerce-oracle/)
- [GitHub Repo](https://github.com/maximilianoPizarro/ecommerce-oracle)

## Package Steps

```bash
helm package . -d charts
helm repo index .
```

## Build image

```bash
oc apply -f pipeline.yaml
```