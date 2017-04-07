import { readFileSync } from 'fs'
import { join } from 'path'

// get synchronously pictures
export const pictures = readFileSync(join(__dirname,
  '500px_photos_response.json')).toString()

// getting pictures asynchronously
export default () =>
  new Promise(resolve => resolve(JSON.parse(pictures)))

