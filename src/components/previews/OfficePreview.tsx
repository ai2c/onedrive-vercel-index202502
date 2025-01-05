import type { OdFileObject } from '../../types'
import { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import Preview from 'preview-office-docs'

import { Dialog } from '@headlessui/react'
import DownloadButtonGroup from '../DownloadBtnGtoup'
import { DownloadBtnContainer } from './Containers'
import { getBaseUrl } from '../../utils/getBaseUrl'
import { getStoredToken } from '../../utils/protectedRouteHandler'

const OfficePreview: FC<{ file: OdFileObject }> = ({ file }) => {
  const { asPath } = useRouter()
  const hashedToken = getStoredToken(asPath)

  const docContainer = useRef<HTMLDialogElement>(null)
  const [docContainerWidth, setDocContainerWidth] = useState(600)

  const docUrl = encodeURIComponent(
    `${getBaseUrl()}/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`
  )

  useEffect(() => {
    setDocContainerWidth(docContainer.current ? docContainer.current.offsetWidth : 600)
  }, [])

  return (
    <Dialog.Panel>
      <Dialog.Panel className="overflow-scroll" ref={docContainer} style={{ maxHeight: '90vh' }}>
        <Preview url={docUrl} width={docContainerWidth.toString()} height="600" />
      </Dialog.Panel>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
    </Dialog.Panel>
  )
}

export default OfficePreview
