import React from 'react'
import Centered from '../layout/centered'

import '../styles/general.scss'

export default () => {
  return(
    <Centered>
      <>
      <h1>Graph Object Notation</h1>
      <p className="error">ALPHA STATE WARNING, PLEASE DO NOT USE IN PRODUCTION, STUFF BREAKS ALL THE TIME</p>
      <p>The goal of this package is to provide a way to serialize/parse graph objects with a syntax as close as possible to JSON.
      The serialized data format is a superset of the JSON data format and holds the extension .gon</p>
      <h1>How to install</h1>
      <pre>
        <code>npm install graph-object-notation --save</code>
      </pre>
      <h1>How to use</h1>
      <pre>
        <code>{`import GON from 'graph-object-notation'

const graph = GON.parse(\`{
  "foo":{"name":"bar"},
  "ref":@foo@
}\`)

console.log(JSON.stringify(graph))
// Returns {"foo":{"name":"bar"},"ref":{"name":"bar"}}

console.log(GON.stringify(graph))
// Returns {
  "data": { "foo":@references.0xf001@, "ref":@references.0xf001@ },
  "references": { "0xf001": { "name":"bar" } }
}`}
        </code>
      </pre>
      <h1>Accepted serialization</h1>
      <p>GON is a superset of JSON, everything JSON should work using GON.parse In addition to JSON, GON offers a few more serialization options:</p>
      <pre>
        <code>{`{
  "date": |2019-12-17T12:00:00.000Z|,
  "bigInt": 42n,
  "Symbol": ±debug±,
  "Reference": @bigInt@
}`}
        </code>
      </pre>

      <h1>Import options</h1>
      <p>You can import the whole suite with <code>import GON from 'graph-object-notation`` or just the part you need with </code>{`import {parse,stringify} from 'graph-object-notation'`}</p>

      <h1>GON.parse(<wbr/>stringToBeParsed<wbr/>)</h1>
      <p>Parse <strong>stringToBeParsed</strong> in the GON format, resolve references and provide a JS object that can be a graph</p>
      <h1>GON.stringify( objectToSerialize, replacer, spaces, target )</h1>
      <p className="error">/!\ Stringify mutate the <strong>objectToSerialize</strong> , this is a know bug and will be resolved later on</p>
      <p className="error">/!\ Stringify return a serialized version of your string on the form {`{"data":{...yourObject/array}, target:{...}}`}, if you want to stringify and parse in succession, you'll need to <code>{`GON.parse( GON.stringify( {test:"hello"} ).data`}</code> to get the expected result</p>
      <p>Serialize <strong>objectToSerialize</strong> to the GON format. default is <code>{}</code></p>
      <p><strong>replacer</strong> is not yet implemented and will work like the <strong>replacer</strong> from JSON.stringify. default is <code>null</code></p>
      <p><strong>space</strong> is used to make the serialized string more readable for human, works like <strong>space</strong> from JSON.stringify, default is <code>0</code></p>
      <p><strong>target</strong> specify the property that will hold the references, default is <code>"references"</code></p>
      <h1>RoadMap</h1>
      <p>The goal is to provide a serialization for useful JS types of object/primitive, and graph supports.
      Next versions will focus on :</p>
      <ul>
      <li>Making stringify immutable</li>
      <li>Adding tests for automatic deployements</li>
      <li>Improved resiliency of the parse/stringify functions</li>
      <li>Better optimization of the parse/stringify functions</li>
      <li>Adding support for Maps and Sets</li>
      <li>Adding support for single-quote/backquote notation for strings</li>
      <li>Adding Conditionnal checks on toGON(), and toJSON() for unknown objects.</li>
      <li>Adding logic for the replacer</li>
      </ul>
      </>
    </Centered>
  )
}
