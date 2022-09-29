import React from 'react'
import { RoutingURLs } from '../../routes/RoutingUrls'
import { PageNotFound } from './PageNotFound'

const PageNotFoundPage = () => {
  return (
    <PageNotFound/>
  )
}

export const route = {
    pageNotFound:{
    path: RoutingURLs.pageNotFound,
    element: <PageNotFoundPage/>
    }
}