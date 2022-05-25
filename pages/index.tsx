import type { ReactElement } from 'react'
import Layout from 'layouts/layout'

export default function Page() {
  return (
  <>
 <h6>Index Here Amit</h6>
 </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
    {page}
    </Layout>
  )
}