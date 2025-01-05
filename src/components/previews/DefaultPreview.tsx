import type { OdFileObject } from '../../types'
import { FC } from 'react'

import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'

import { getFileIcon } from '../../utils/getFileIcon'
import { formatModifiedDateTime, humanFileSize } from '../../utils/fileDetails'

import DownloadButtonGroup from '../DownloadBtnGtoup'
import { DownloadBtnContainer, PreviewContainer } from './Containers'

const DefaultPreview: FC<{ file: OdFileObject }> = ({ file }) => {
  const { t } = useTranslation()

  return (
    <Dialog.Panel>
      <PreviewContainer>
        <Dialog.Panel className="items-center px-5 py-4 md:flex md:space-x-8">
          <Dialog.Panel className="rounded-lg border border-gray-900/10 px-8 py-20 text-center dark:border-gray-500/30">
            <FontAwesomeIcon icon={getFileIcon(file.name, { video: Boolean(file.video) })} />
            <Dialog.Panel className="mt-6 text-sm font-medium line-clamp-3 md:w-28">{file.name}</Dialog.Panel>
          </Dialog.Panel>

          <Dialog.Panel className="flex flex-col space-y-2 py-4 md:flex-1">
            <Dialog.Panel>
              <Dialog.Panel className="py-2 text-xs font-medium uppercase opacity-80">{t('Last modified')}</Dialog.Panel>
              <Dialog.Panel>{formatModifiedDateTime(file.lastModifiedDateTime)}</Dialog.Panel>
            </Dialog.Panel>

            <Dialog.Panel>
              <Dialog.Panel className="py-2 text-xs font-medium uppercase opacity-80">{t('File size')}</Dialog.Panel>
              <Dialog.Panel>{humanFileSize(file.size)}</Dialog.Panel>
            </Dialog.Panel>

            <Dialog.Panel>
              <Dialog.Panel className="py-2 text-xs font-medium uppercase opacity-80">{t('MIME type')}</Dialog.Panel>
              <Dialog.Panel>{file.file?.mimeType ?? t('Unavailable')}</Dialog.Panel>
            </Dialog.Panel>

            <Dialog.Panel>
              <Dialog.Panel className="py-2 text-xs font-medium uppercase opacity-80">{t('Hashes')}</Dialog.Panel>
              <table className="block w-full overflow-scroll whitespace-nowrap text-sm md:table">
                <tbody>
                  <tr className="border-y bg-white dark:border-gray-700 dark:bg-gray-900">
                    <td className="bg-gray-50 py-1 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      Quick XOR
                    </td>
                    <td className="whitespace-nowrap py-1 px-3 font-mono text-gray-500 dark:text-gray-400">
                      {file.file.hashes?.quickXorHash ?? t('Unavailable')}
                    </td>
                  </tr>
                  <tr className="border-y bg-white dark:border-gray-700 dark:bg-gray-900">
                    <td className="bg-gray-50 py-1 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      SHA1
                    </td>
                    <td className="whitespace-nowrap py-1 px-3 font-mono text-gray-500 dark:text-gray-400">
                      {file.file.hashes?.sha1Hash ?? t('Unavailable')}
                    </td>
                  </tr>
                  <tr className="border-y bg-white dark:border-gray-700 dark:bg-gray-900">
                    <td className="bg-gray-50 py-1 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                      SHA256
                    </td>
                    <td className="whitespace-nowrap py-1 px-3 font-mono text-gray-500 dark:text-gray-400">
                      {file.file.hashes?.sha256Hash ?? t('Unavailable')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Dialog.Panel>
          </Dialog.Panel>
        </Dialog.Panel>
      </PreviewContainer>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
    </Dialog.Panel>
  )
}

export default DefaultPreview
