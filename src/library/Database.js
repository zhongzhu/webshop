import localforage from 'localforage'

export default {
  addProduct (product) {
    localforage.length().then(n => {
      let id = n + 1
      localforage.setItem(id, product).then((value) => {
        return {id: id, data: value}
      })
    })
  },
  saveProduct (id, product) {
    return localforage.setItem(id, product)
  },
  deleteProduct (id) {
    return localforage.removeItem(id)
  },
  getProducts () {
    let products = []

    return new Promise((resolve, reject) => {
      localforage.iterate((value, id) => {
        products.push({ id: id, data: value })
      }).then(() => {
        resolve(products)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
