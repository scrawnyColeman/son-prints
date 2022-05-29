import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, GraphQLClient } from 'graphql-request';


const API_KEY = process.env.GRAPHCMS_API_KEY;

const graphcms = new GraphQLClient(
  API_KEY
)

const query = gql`
    {
      prints {
        id
        slug
        title
        description {
          html
        }
        isActive
        coverPhoto {
          url
          width
          height
        }
        triloShortCode
        updatedAt
      }
    }
`;

export async function getStaticProps() {
  const { prints } = await graphcms.request(query);
  return {
    props: {
      prints
    },
    revalidate: 10
  }
}


export default function Home({ prints }) {
  return (
    <pre className={styles.container}>
      {JSON.stringify(prints, null, 2)}
    </pre>
  )
}
