
# Petit URL

Petit URL es una aplicación web que provee de todo un sistema para hacer un acortador de enlaces. 


## Referencia de la API

#### Redireccionar al enlace real

```http
  GET /:code
```
Recibe el código abreviado de la URL directamente para redireccionar a la página real.


#### Crear enlace abreviado

```http
  POST /save
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. real URL to make short |

Crea y devuelve el enlace corto a partir de una URL enviada.


## Variables de entorno

Para ejecutar el proyecto, debes definir las siguientes variables de la API REST en el fichero .env

`PORT` -> puerto de ejecución de la API

`DB_HOST` -> host de la base de datos

`DB_PORT` -> puerto de la base de datos

`DB_USER` -> usuario de la base de datos

`DB_PASSWORD` -> contraseña de la base de datos

`DB_DATABASE` -> nombre de la base de datos

`SHORT_DOMAIN_URL` -> URL de la API y de los enlaces abreviados
