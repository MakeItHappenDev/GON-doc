# GraphObjectNotation

The JSON5 Data Interchange Format (JSON5) is a superset of JSON that aims to alleviate some of the limitations of JSON by expanding its syntax to include some productions from ECMAScript 5.1.

# Summary of features

  - Standart support for everything JSON provides

## Objects

 - Objects keys may be an ECMAScript 5.1 IdentifierName
 - Objects may have a single trailing comma

## Arrays

 - Arrays may have a single trailing comma

## Strings

  - Strings may be single quoted
  - Strings may span multiple lines by escaping new line characters.
  - Strings may include character escape
  - Strings may be back quoted ( multiline support )

## Numbers

  - Numbers may be bigInt, 12534567891315687n
  - Numbers may be hexadecimal
  - Numers may have a leading or trailing decimal point
  - Numbers may be IEE 754 positive infinity, negative infinity or NaN
  - Numbers may begin with an explicit plus sign

## Comments

  - Single and multilines comments are allowed

## Dates

  - Date objects are conserved during parsing/serializing
  - Date are expressed as @2019-11-18T19:41:02.095Z@  (@toISOString()@, maybe trailing @ is optionnal)

## Sets and Maps

  - Sets and maps are conserved during parsing/serializing
  - Sets are expressed as #[....]
  - Maps are expressed as #{....}

## References 

  - References are supported (preventing throwing cyclic structure)
  - References are expressed as $path.to.reference$ (Maybe trailing $ is optionnal)


# Short Example

```js
{
  // comments
  unquoted: 'and you can quote me on that',
  singleQuotes: 'I can use "double quotes" here',
  lineBreaks: "Look, Mom! \
No \\n's!",
  backquoted:`Hello from the
futur`,
  hexadecimal: 0xdecaf,
  leadingDecimalPoint: .8675309, andTrailing: 8675309.,
  bigNumber: 321543123n,
  positiveSign: +1,
  date: |2019-11-18T19:41:02.000Z|,
  aReference:@unquoted@,
  map:#{
      $date$:'The date',
      'bigNumber':'new type'
  },
  set:#[1,2,3],
  trailingComma: 'in objects', andIn: ['arrays',],
  "backwardsCompatible": "with JSON",
}
```

# Development

```
git clone https://github.com/MakeItHappen/GraphObjectNotation
cd GraphObjectNotation
npm install
```

# Licence

MIT do what you want

# Credit

This library is HEAVILY influenced by [JSON5](https://github.com/json5/json5) and most credit must be toward them. However the code is made by Arthur Juchereau in an attempt to learn more about parser in general.