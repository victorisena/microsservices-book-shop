# Pontos importantes

> A aplicação está rodando fora do contexto Docker, por este motivo foi usado o IP do HOST (172.17.0.1 -> host.docker.internal)

# Como rodar?

Precisamos rodar o Node e o compose, depois você pode criar um Dockerfile da sua aplicação e adicionar o compose dessa forma você pode apontar no Kong pelo alias por exemplo: "hello-service".

```shell
# roda o kong
(docker compose up -d)

# roda o node
(cd services/hello-app && npm start)
```
# Testes

## Rota da aplicação

```shell
curl -X GET http://localhost:3000/api
# {"message":"Hello world!"}
```

## Rota do Kong

```shell
curl -X GET http://localhost:8000
# {"message":"Hello world!"}
```

# Desafios

> Se a ideia foi construir um cluster e usar o Kong para orquestrar, você pode usar dentro do Kubernetes e informar no upstream o DNS criado pelo Kubernetes, se for pelo Docker Swarm utilizar o host e porta dós nós manager do Docker Swarm.


# Referências

- [Configurações do Kong DB Less](https://docs.konghq.com/gateway/latest/production/deployment-topologies/db-less-and-declarative-config/#:~:text=Kong%20Gateway%20can%20be%20run,or%20JSON%2C%20using%20declarative%20configuration)
- [Declarative Schema](https://github.com/Kong/deck/blob/main/file/kong_json_schema.json)
