const {makeWallet, makeClient} = require('@ixo/client-sdk')

const
    wallet = await makeWallet(),
    client = makeClient(wallet)

await client.register()

await client.sendTokens('<target address>', 10)

const someProject = await client.getProject('<a valid project DID>')

const someClaims = await client.listClaims(someProject)
console.log('Here are the claims', someClaims)
