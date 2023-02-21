import React from 'react'

const DocumentViewer = ({ property }) => {
  return (
    <>
      {property?.documents?.map((document) => {
        return (
          <div key={document?.id}>
            <iframe src={document?.url} width="100%" height="200px" />
          </div>
        )
      })}
    </>
  )
}

export default DocumentViewer
