import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
// import { Document, Page } from 'react-pdf'
import WebViewer from '@pdftron/webviewer'

function UploadPDF(props) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pdfFile, setPdfFile] = useState(null)
  const [previewFile, setPreviewFile] = useState()
  const viewer = useRef(null)

  useEffect(() => {
    if (previewFile) {
      WebViewer(
        {
          path: './webviewer/lib',
          licenseKey:
            'demo:1700229537974:7cd4c11c03000000000a875425bf12dafd09f4870b794528374e9265d3',
          initialDoc: previewFile,
        },
        viewer.current,
      ).then((instance) => {
        const { documentViewer, annotationManager, Annotations, PDFNet } = instance.Core
        instance.UI.setHeaderItems((header) => {
          header.push({
            type: 'actionButton',
            img: 'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-download-icon-image_1344466.jpg',
            onClick: async () => {
              const doc = documentViewer.getDocument()
              const xfdfString = await annotationManager.exportAnnotations()
              const data = await doc.getFileData({
                // saves the document with annotations in it
                xfdfString,
              })
              const arr = new Uint8Array(data)
              const blob = new Blob([arr], { type: 'application/pdf' })

              // Add code for handling Blob here
              // Create a Blob URL for the modified PDF
              const blobUrl = URL.createObjectURL(blob)

              // Create a link element
              const downloadLink = document.createElement('a')
              downloadLink.href = blobUrl
              downloadLink.download = 'modified_file.pdf' // Specify the filename
              downloadLink.click()

              // Clean up
              URL.revokeObjectURL(blobUrl)
            },
          })
        })
        // you can now call WebViewer APIs here...
        //   documentViewer.
      })
    }
  }, [previewFile])
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'application/pdf',
    onDrop: useCallback((acceptedFiles) => {
      const file = acceptedFiles[0]
      setPdfFile(file)
      setPreviewFile(URL.createObjectURL(file))
    }, []),
  })

  return (
    <div>
      {!previewFile && (
        <section
          {...getRootProps()}
          style={{
            border: '2px dashed #2e89ff',
            padding: '20px',
            margin: '20px 0',
            borderRadius: 10,
            height: 500,
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: '#e1e8fc',
          }}
        >
          <input
            {...getInputProps()}
            style={{
              opacity: 0,
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              position: 'absolute',
            }}
          />
          <div>
            <img style={{ width: 300 }} src="./cum1.png" alt="" />
          </div>
          <div>
            <img style={{ width: 300 }} src="./cum2.png" alt="" />
          </div>
        </section>
      )}
      {previewFile && (
        <>
          <div className="MyComponent">
            <div className="header">File đề xuất</div>
            <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
          </div>
          <div style={{ width: '100%', marginTop: 20 }}>
            <div></div>
          </div>
        </>
      )}
    </div>
  )
}

export default UploadPDF
