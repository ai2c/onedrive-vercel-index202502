import Image from 'next/image'
import { Trans } from 'next-i18next'

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <Dialog.Panel className="my-12">
      <Dialog.Panel className="mx-auto w-1/3">
        <Image src="/images/fabulous-rip-2.png" alt="404" width={912} height={912} priority />
      </Dialog.Panel>
      <Dialog.Panel className="mx-auto mt-6 max-w-xl text-gray-500">
        <Dialog.Panel className="mb-8 text-xl font-bold">
          <Trans>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Oops, that's a <span className="underline decoration-red-500 decoration-wavy">four-oh-four</span>.
          </Trans>
        </Dialog.Panel>
        <Dialog.Panel className="mb-4 overflow-hidden break-all rounded border border-gray-400/20 bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
          {errorMsg}
        </Dialog.Panel>
        <Dialog.Panel className="text-sm">
          <Trans>
            Press{' '}
            <kbd className="rounded border border-gray-400/20 bg-gray-100 px-1 font-mono text-xs dark:bg-gray-800">
              F12
            </kbd>{' '}
            and open devtools for more details, or seek help at{' '}
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline"
              href="https://github.com/spencerwooo/onedrive-vercel-index/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              onedrive-vercel-index discussions
            </a>
            .
          </Trans>
        </Dialog.Panel>
      </Dialog.Panel>
    </Dialog.Panel>
  )
}

export default FourOhFour
