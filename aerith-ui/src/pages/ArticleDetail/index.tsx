import React from 'react'

import ReactMarkdown from 'react-markdown'


export default function ArticleDetail() {
  return (
    <div>
      <ReactMarkdown children={'markdown'} skipHtml/>
    </div>
  )
}
