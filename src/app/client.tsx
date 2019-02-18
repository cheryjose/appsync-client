import * as React from 'react'
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import { awsConfig } from './aws-exports'
import { ApolloProvider  } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'

const client = new AWSAppSyncClient({
    url: awsConfig.apiUrl,
    region: awsConfig.region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsConfig.apiKey 
    }
})


export class SportsForm extends React.Component {
    render() {
        return <ApolloProvider client={client as any}>
            <Rehydrated>
                <div>
                    {this.props.children}
                </div>
            </Rehydrated>
        </ApolloProvider>
    }
}
