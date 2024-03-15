import * as Example from './example.mdx'

export default function MdxContentPage() {
  return (
    <div>
      mdx content
      <div>Example: {JSON.stringify(Example, null, 2)}</div>
      <Example.default />
    </div>
  )
}
