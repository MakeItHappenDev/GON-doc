import {parse} from 'graph-object-notation'

const string = `{
  "authorsById":{
    "arthur":{"id":1,"name":"Arthur","tweets":[@tweetsById.1@,@tweetsById.2@]},
    "armando":{"id":2,"name":"Armando", "tweets":[@tweetsById.3@]}
  },
  "tweetsById":{
    "1":{"id":1,"text":"Foo Bar", "author":@authorsById.arthur@},
    "2":{"id":2,"text":"hello world", "author":@authorsById.arthur@},
    "3":{"id":3, "text":"Test me out","author":@authorsById.armando@}
  }
}`

export default parse(string)