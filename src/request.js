export default function request(query) {
  const apiUrl = `https://api.500px.com/v1/photos/search?
		consumer_key=lILSGooAAcT8UA91VwlYViFeiY3SuPoebq9BtRQ4&
		image_size[]=3&
		image_size[]=4&
		term=${query}`

  return fetch(apiUrl)
    .then(response => response.json())
    .catch(error => console.error(error))
}