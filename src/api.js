// process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE
import { unregister } from './intercerptor'
const baseURL = process.env.REACT_APP_PRO_MODE

const headerAuth = {
  username: 'testclient',
  password: 'testsecret'
}
const header = {
  'Authorization': 'Basic ' + btoa(`${headerAuth.username}:${headerAuth.password}`),
  'Content-Type': 'application/json'
}

export function getLogin(props) {
  return fetch(`${baseURL}/user/login`, { method: 'POST', headers: header, body: JSON.stringify(props) })
}

const headerToken = () => {
  return (
    {
      'Authorization': "Bearer " + localStorage.getItem('ACCESS_TOKEN_NAME'),
      'Content-Type': 'application/json'
    }
  )

}
export function getInvoice(id) {
  return fetch(`${baseURL}/sale${id ? '/' + id : ''}`, { method: 'GET', headers: headerToken() })
}

/* EndPoint Category */
export function getCategory(id) {
  return fetch(`${baseURL}/category${id ? '/' + id : ''}`, { method: 'GET', headers: headerToken() })
}
export function putCategory(id, props) {
  return fetch(`${baseURL}/category/${id}`, { method: 'PUT', headers: headerToken(), body: JSON.stringify(props) })
}
export function deleteCategory(id) {
  return fetch(`${baseURL}/category/${id}`, { method: 'DELETE', headers: headerToken() })
}
export function postCategory(props) {
  return fetch(`${baseURL}/category`, { method: 'POST', headers: headerToken(), body: JSON.stringify(props) })
}

/* EndPoint Customer*/
export function getCustomer(id) {
  return fetch(`${baseURL}/customer${id ? '/' + id : ''}`, { method: 'GET', headers: headerToken() })
}
export function postCustomer(props) {
  return fetch(`${baseURL}/customer`, { method: 'POST', headers: headerToken(), body: JSON.stringify(props) })
}
export function putCustomer(id, props) {
  return fetch(`${baseURL}/customer/${id}`, { method: 'PUT', headers: headerToken(), body: JSON.stringify(props) })
}
export function deleteCustomer(id) {
  return fetch(`${baseURL}/customer/${id}`, { method: 'DELETE', headers: headerToken() })
}

/* EndPoint Product*/
export function getProduct(id) {
  return fetch(`${baseURL}/product${id ? '/' + id : ''}`, { method: 'GET', headers: headerToken() })
}
export function postProduct(props) {
  return fetch(`${baseURL}/product`, { method: 'POST', headers: headerToken(), body: JSON.stringify(props) })
}
export function putProduct(id, props) {
  return fetch(`${baseURL}/product/${id}`, { method: 'PUT', headers: headerToken(), body: JSON.stringify(props) })
}
export function deleteProduct(id) {
  return fetch(`${baseURL}/product/${id}`, { method: 'DELETE', headers: headerToken() })
}