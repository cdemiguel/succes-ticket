const axios = require("axios")

const api_client = {
  baseUrl() {
    return `${this.protocol}://${this.host}:${this.port}`
  },

  loginUser(username, password) {
    return axios
      .post(`${this.baseUrl()}/events/login`, { username, password })
      .then(res => res.data)
  },

  getCompanyName(token) {
    return axios
      .get(`${this.baseUrl()}/events/company`, {headers: { Authorization: `Bearer ${token}` }})
      .then(res => res.data.data)
  },

  getCompanyIdByUser(userId) {
    return axios
      .get(`${this.baseUrl()}/events/companyid/${userId}`)
      .then(res => res.data.data)
  },

  getEventListByCompanyId(companyId) {
    return axios
      .get(`${this.baseUrl()}/events/companyid/events/${companyId}`)
      .then(res => res.data.data)
  },

  getUserById(userId) {
    return axios
      .get(`${this.baseUrl()}/events/user/${userId}`)
      .then(res => res.data.data)
  },

  getEventList(token) {
    return axios
      .get(`${this.baseUrl()}/events`, {headers: { Authorization: `Bearer ${token}` }})
      .then(res => res.data.data)
  },

  getSessionsList(eventId) {
    return axios
      .get(`${this.baseUrl()}/events/sessions/${eventId}`)
      .then(res => res.data.data)
  },

  getTicketsList(eventId, sessionId) {
    return axios
      .get(`${this.baseUrl()}/events/sessions/tickets/${eventId}/${sessionId}`)
      .then(res => res.data.data)
  },

  getTicket(eventId, sessionId, ticketId) {
    return axios
      .get(
        `${this.baseUrl()}/events/sessions/ticket/${eventId}/${sessionId}/${ticketId}`
      )
      .then(res => res.data)
  },

  validateTicket(eventId, sessionId, ticketId) {
    return axios
      .put(
        `${this.baseUrl()}/events/sessions/validate-ticket/${eventId}/${sessionId}/${ticketId}`
      )
      .then(res => res.data)
  },

  createUser(name, username, email, password, rol, companyId, eventsId) {
    return axios
      .post(`${this.baseUrl()}/events/usercreate`, {
        name,
        username,
        email,
        password,
        rol,
        companyId,
        eventsId
      })
      .then(res => res.data)
  },

  getUsersByCompanyId(companyId) {
    return axios
      .get(`${this.baseUrl()}/events/user/company/${companyId}`)
      .then(res => res.data.data)
  },

  deleteUser(email, role, emailUser) {
    return axios
      .delete(`${this.baseUrl()}/events/user/delete/${email}`, {
        data: { role, emailUser }
      })
      .then(res => res.data)
  }
}

module.exports = api_client