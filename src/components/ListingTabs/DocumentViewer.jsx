import React from 'react'

const DocumentViewer = ({ property }) => {
  console.log('====================================')
  console.log('property', property?.documents)
  console.log('====================================')
  property?.documents?.push(property?.documents[0])
  property?.documents?.push(property?.documents[0])
  property?.documents?.push(property?.documents[0])
  property?.documents?.push(property?.documents[0])
  return (
    <>
      {property?.documents?.map((document) => {
        return (
          <div key={document?.id}>
            <iframe src={document} width="100%" height="200px" />
          </div>
        )
      })}
    </>
  )
}

export default DocumentViewer
