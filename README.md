# Email Service

## api

- https://email-tekio.herokuapp.com

## Para registrar

### HTTP Post: /users

- Body:

```json
{
  "name": "string",
  "emailForNotification": "string",
  "service": "nodemailer",
  "acess": {
    "host": "string",
    "port": "number",
    "auth": {
      "user": "string",
      "pass": "string"
    },
    "secure": false,
    "tls": {
      "rejectUnauthorized": false
    }
  }
}
```

Depois disso você recebera no seu email uma chave de indentificação. Com ela você poderá deletar ou fazer alterações do cadastro.

## Para recuperar sua Key

### Http Get: users/"email"

- Você receberá no seu email a sua chave key
