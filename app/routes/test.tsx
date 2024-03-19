import { Komponent } from '~/components/komponent'

export default function TestPage() {
  const mdx = `
#hello world!

<div className='text-2xl'>hoge!</div>
`
  return (
    <div>
      <Komponent markdown={mdx} />
    </div>
  )
}
