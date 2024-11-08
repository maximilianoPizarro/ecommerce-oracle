# Deploy JHipster Oracle Helm Charts example on Red Hat OpenShift

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
helm install ecommerce-oracle ecommerce-oracle/ecommerce-oracle --version 0.1.3
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

