import React from 'react'
import { SelectForm } from '@/app/(home)/searchForm'
import { getdb } from './opendb2'


const makes = await getdb()

export const SearchForm = () => {
  return (
    <SelectForm makes={makes} />
  )
}

