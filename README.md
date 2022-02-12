### Para registrar

- HTTP Post
  - Body:

```json
{
  "name": "",
  "emailForNotification": "string",
  "service": "sendgrid",
  "acess": {
    "host": "string",
    "port": "number",
    "auth": {
      "user": "string",
      "pass": "string"
    },
    "apiKey": "string",
    "emailFrom": "string"
  }
}
```

Depois disso você recebera no seu email uma chave de indentificação. Com ela você poderá deletar ou fazer alterações do cadastro.
