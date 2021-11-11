import Image from 'next/image'
import Layout from '../components/Layout'
import db from './../utils/db'
import Property from '../models/Property'

export default function Home(props) {
  const { featuredProperties } = props

  return (
    <Layout
      title="Home Page"
      description="Welcome to Dubai Properties Agency"
      featuredProperties={featuredProperties}
    >
      <h1>HOme page</h1>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const featuredPropertiesDocs = await Property.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(3)

  await db.disconnect()

  return {
    props: {
      featuredProperties: featuredPropertiesDocs.map(db.convertDocToObj),
    },
  }
}
