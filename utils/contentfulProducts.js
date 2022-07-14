const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntry(id) {
  //const entry = await client.getEntry()
  const entry = await client.getEntries({
    content_type: 'product',
    'fields.id': id
  })
  if(entry.items && entry.items.length > 0) {
    return entry.items[0]
  } else {
    console.log(`Error getting Entry for ${id}.`);
    return {};
  }
}

export default { fetchEntries }