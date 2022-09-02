module.exports = (router, container) => {
  console.log(container.get('gue'))

  router.get('/login', container.get('AuthController').login)
}