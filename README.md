# tech-practices-interview-javascript
Javascript version of a coding test for pair programming interviews

## Usage

Install nodemon

```
npm i nodemon --save
```

Install server and client dependencies

```
npm install
cd client
npm install
```

To start the server and client at the same time

```
npm run dev
```

NB: If yarn is available, that can be used instead. This project requires the user to have node

## Where to start 

There will be one test to check the default cart works. The code is currently not implemented, and your first task is to implement it like this ...

```
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

this will give the candidate a little context. Then, hand the keybnoard over to them and they can implement the next business rule 
