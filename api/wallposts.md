# Posting on a user's wall/globally

accepted endpoint pattern: `/api/v1/profiles/[handle]/wall/posts`

example url would be something like `https://bliish.com/api/v1/profiles/top/wall/posts`

accepts json when doing post requests

authentication is based on the "cookie" header, with the format being "sb-prkqirdzadljdpkrvjvz-auth-token.0" and accepting a value preceded by "base64-" 
`base64-alkjsdhflkjashdfkjlash`
as well as needing a second part to the cookie, "sb-prkqirdzadljdpkrvjvz-auth-token.1", this just continues the base64 string

(whatever the value of the cookie is)

api accepts a json format 
```{"body": "text content"}```


you get a response back that looks like the following
```{id: "4MlTVVWv", pending: false}```

a similar approach can be done for the global wall posts as well with the endpoint being `https://bliish.com/api/v1/posts`