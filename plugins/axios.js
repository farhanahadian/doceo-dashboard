export default function ({ $axios }, inject) {
  const api = $axios.create({
    baseUrl: '/webapi/'
  })
  inject('webapi', api)
}
