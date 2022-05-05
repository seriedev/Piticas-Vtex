export default class Vtexjs {
  constructor() {
    this.VTEX_BASE_ENDPOINT = {
      BASE_URL: '/api',
      BASE_MASTER_DATA: '/dataentities',
    };
  }

  get(endpoint) {
    return this._handleResolver(endpoint, 'GET');
  }

  getSemApi(endpoint) {
    return this._handleResolverNoBase(endpoint, 'GET');
  }

  delete(endpoint) {
    return this._handleResolver(endpoint, 'DELETE');
  }

  post(endpoint, payload = {}) {
    return this._handleResolver(endpoint, 'POST', payload);
  }

  postSemApi(endpoint, payload = {}) {
    return this._handleResolverNoBase(endpoint, 'POST', payload);
  }

  put(endpoint, payload = {}) {
    return this._handleResolver(endpoint, 'PUT', payload);
  }

  patch(endpoint, payload = {}) {
    return this._handleResolver(endpoint, 'PATCH', payload);
  }

  async _handleResolver(endpointUrl, httpVerb, payload) {
    let header = {
      method: httpVerb,
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(
      this.VTEX_BASE_ENDPOINT.BASE_URL + endpointUrl,
      header
    );

    if (response.status === 401) {
      window.location.assign(window.location);
      return;
    }

    const data =
      response.status != 204 ? await response.json() : await response;

    if (response.ok) {
      return data;
    }

    return Promise.reject(data);
  }

  async _handleResolverNoBase(endpointUrl, httpVerb, payload) {
    let header = {
      method: httpVerb,
      body: JSON.stringify(payload),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(endpointUrl, header);
    if (response.status === 401) {
      console.log('Error to get API');
      window.location.assign(window.location);
      return;
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return Promise.reject(data);
  }
}
