# Jetbrains-Help

## Table of Contents

- [Project Description](#Project Description)
- [Warehouse Brief](#Warehouse Brief)
- [Warehouse Trend](#Warehouse Trend)
- [Supported Version](#Supported Version)
- [Project Version](#Project Version)
- [Function List](#Function List)
- [Run Tutorial](#Run Tutorial)
- [Pull Project](#Pull Project)
- [Configure Environment](#Configure Environment)
- [Local Run](#Local Run)
- [Container Run](#Container Run)
- [Run Service](#Run Service)
- [Local Run](#Local Run)
- [With IDE](#With IDE)
- [Without IDE](#Without IDE)
- [Container Run](#Container Run)
- [Use Tutorial](#Use Tutorial)
- [Download Dependencies](#Download Dependencies)
- [Dependency Configuration](#Dependency Configuration)
- [Open IDE](#Open IDE)
- [IDE cannot be opened](#IDE can be opened)

## Project description

### Warehouse overview

<p align="left">
<img src="https://img.shields.io/github/stars/NotoChen/Jetbrains-Help">
<img src="https://img.shields.io/github/forks/NotoChen/Jetbrains-Help">
<img src="https://img.shields.io/github/repo-size/notochen/jetbrains-help">
<img src="https://img.shields.io/github/license/notochen/jetbrains-help">
</p>

### Warehouse trends

<p align="center">
<img src="https://api.star-history.com/svg?repos=NotoChen/Jetbrains-Help&type=Date"> </p> ### Supported version <p align="left"> <img src="https://img.shields.io/badge/Jetbrains_Version-All-%23000000?logo=jetbrains&labelColor=black&color=white"> </p> ### Project version <p align="left"> <img src="https://img.shields.io/badge/Java_Version-21-%23000000?logo=openjdk&&color=white"> <img src="https://img.shields.io/badge/Maven_Version-Laster-%23000000?logo=apachemaven&&color=white">
<img src="https://img.shields.io/badge/SpringBoot_Version-Laster-%23000000?logo=springboot&&color=white">
<img src="https://img.shields.io/badge/Thymeleaf_Version-Laster-%23000000?logo=thymeleaf&&color=white">
</p>

### Feature List

| Feature                                                                   | DID |
| :------------------------------------------------------------------------ | :-: |
| Jetbrains full product support                                            | ✅  |
| Jetbrains full plugin support                                             | ✅  |
| Plugin library fully automatically subscribes to official website updates | ✅  |
| Public and private keys/certificates, automatic generation and management | ✅  |
| Automatic configuration of power.conf file                                | ✅  |
| Automatic packaging of ja-netfilter.zip                                   | ✅  |
| Custom License Show                                                       | ✅  |
| Support real-time search                                                  | ✅  |
| Plug-ins are sorted by name by default                                    | ✅  |
| Support local/jar/dockerfile operation                                    | ✅  |
| Single code family bucket activation support                              | ✅  |
| ……                                                                        | ☑️  |

## Running tutorial

> The following is a detailed running tutorial for this project, and try to run it in various environments

### Pull the project

`clone` this project to local

### Configure the environment

#### Local operation

1. `Java` environment is required, and the version is **21**

2. `Maven` environment is required, no version is required, but the latest version is recommended

#### Container operation

1. `Docker` is required Environment, no version requirements, but the latest version is recommended
2. If there is a `Docker-Compos` environment, it is better, but this environment is **not required**

### Run the service

#### Local operation

##### With IDE

1. `Open` project through `IDE`
2. Configure project related environment
3. Run [JetbrainsHelpApplication.java](src%2Fmain%2Fjava%2Fcom%2Fjetbrains%2Fhelp%2FJetbrainsHelpApplication.java)

##### Without IDE

1. System terminal `Cd` Enter the project root directory
2. Run the packaging command `mvn clean package`
3. Run the startup command `java -jar target/Jetbrains-Help.jar`

#### Container operation

1. System terminal `Cd` Enter the project root directory

##### Use Docker

2. Run `Docker` command `docker build -t jetbrains-help .`
3. **or** execute [build-with-docker.sh](build-with-docker.sh)
4. Run `Docker` command `docker run -d -p 10768:10768 --name jetbrains-help jetbrains-help`
5. **or** execute [run-with-docker.sh](run-with-docker.sh)

##### Use Docker-Compose

2. Run `Docker-Compose` command `docker compose build && docker compose up -d`
3. **or** execute [run-with-docker-compose.sh](run-with-docker-compose.sh)

### Use tutorial

After the project is running, `Console` will print the relevant service address, the default port is `10768`, the default address is `127.0.0.1:10768`

You can click here to directly access [Jetbrains-Help](http://127.0.0.1:10768)

#### Download dependencies

Read **page header**, download `ja-netfilter.zip` according to the header instructions

Move local `ja-netfilter.zip` to a custom directory, **unzip**

#### Dependency configuration

##### Open IDE

- `Enter IDE`
- **Click** menu bar `Help`
- **Click** `Edit custom virtual machine selection`
- **Type** Configure as follows

```
-javaagent:you-path/ja-netfilter.jar
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
```

- Replace `you-path` with the custom directory in the [Download Dependencies](#Download Dependencies) step
- **Restart** `IDE`

##### Cannot open IDE

- **Download and install** [Toolbox](https://www.jetbrains.com/toolbox-app/)
- **Start** `Toolbox`
- **Click** `Toolbox` to find the corresponding `IDE`
- **Click** `⋮` on the right side of `IDE`
- **Click** `Settings`
- Find the `Configuration` option
- **Click** `Edit JVM options`
- **Type** Configure as follows

```
-javaagent:you-path/ja-netfilter.jar
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
```

- Replace `you-path` with the custom directory in the [Download Dependencies](#Download Dependencies) step
- **Restart** `IDE`
