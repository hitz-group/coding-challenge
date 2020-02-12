# tech-practices-interview-javascript

Javascript version of a coding test for pair programming interviews

Install server and client dependencies

```bash
yarn install
cd client
yarn install
```

To start the server and client at the same time

```bash
yarn start
```

To test the project

```bash
yarn test
```

NB: If yarn is available, that can be used instead. This project requires the user to have node > 12

## Where to start

There will be one test to check the default cart works. The code is currently not implemented, and your first task is to implement it like this ...

```bash
class Checkout{
    ...
    total ()
    {
        var total = 0

        this.CartItems.map(item => {
            const rule = this.Rules.find(rule => rule.adType === item)
            total += rule.retailPrice
        })

        return total
    }
}
```

this will give the candidate a little context. Then, hand the keyboard over to them and they can implement the next business rule
