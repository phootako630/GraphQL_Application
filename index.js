import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolver from './resolver'

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing')
})

const root = resolver;

// graphQL response when asking for hello
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port 8080/graphQL'));