import { gql } from '@apollo/client';

export const getEvents = gql`
    query events{
        events{
            id
            title
            desc
            date
        }
    }
`;