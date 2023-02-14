import { Box, ActionIcon, Text } from '@mantine/core'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { IconCircleX, IconPaperclip } from '@tabler/icons'

export default function DropZone({ value, setValue }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      file.preview = URL.createObjectURL(file)
      setValue(file)
    },
  })
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: value == null ? 5 : 0,
        overflow: 'hidden',
        borderWidth: '2px',
        borderStyle: 'dashed',
        borderColor: isDragAccept
          ? 'success.main'
          : isDragReject
          ? 'error.main'
          : 'gray',
        borderRadius: 10,
        width: 'min(100%, 400px)',
        height: 400,
        outline: 'none',
        transition: 'border .24s ease-in-out',
        mx: 'auto',
        textAlign: 'center',
        '&:hover': {
          borderColor: '#D92228',
        },
      }}
      {...getRootProps()}
      mt={'xl'}
      mb={'xl'}
    >
      {value == null ? (
        <>
          <input
            {...getInputProps()}
            onChange={(e) => {
              const file = e.target.files[0]
              file.preview = URL.createObjectURL(file)
              setValue(file)
            }}
          />
          <IconPaperclip size={28} />
          {isDragActive ? (
            <Text mt={'xs'}>Drop the files here ...</Text>
          ) : (
            <Text mt={'xs'}>
              Drag and drop some files here,
              <br />
              or click to select files
            </Text>
          )}
        </>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <img
            src={value.preview || value}
            alt="preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <ActionIcon
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.3)',
              p: '5px',
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
            onClick={() => {
              setValue(null)
            }}
          >
            <IconCircleX size={30} />
          </ActionIcon>
        </Box>
      )}
    </Box>
  )
}
