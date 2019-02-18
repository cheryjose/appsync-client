import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

export function buildQuery({ startDateUTC, home }) {
    return gql`
    {
      getSportsFormDate(startDateUTC: "${startDateUTC}", home: "${home}") {
            startDateUTC
            matches  
            away
            home
      }
    }
  `
}

export function DataComponent(query, View: React.StatelessComponent | React.ComponentClass) {
    return <Query query={query} fetchPolicy='cache-first'>
        {({ loading, error, data }) => {

            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return <View {...data.getSportsFormDate} />
        }}
    </Query>
}