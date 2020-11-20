import JsonP from "jsonp";

export default class Axios {
  static jsonp (options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, (err, response) => {
        // TODO 
        // debugger
        if (response.status === 'success') {
          const results = response.results
          resolve(results)
        } else {
          const error = response.err
          reject(error)
        }
      })
    })
  }
}