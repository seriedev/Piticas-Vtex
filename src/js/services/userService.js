import Vtexjs from './vtex';

class UserService {
  constructor() {
    this.VTEX_ENDPOINTS = {
      USER_INFO: '/no-cache/profileSystem/getProfile',
      GET_SESSION: '/sessions/',
      GET_USER_API: '/ipify.org',
      AVISEME: '/no-cache/AviseMe.aspx',
    };

    this._apiService = new Vtexjs();
  }

  async getUserInformation(param) {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.USER_INFO: {
        const userInfo = await this._apiService.getSemApi(param.type);
        return userInfo;
      }

      case this.VTEX_ENDPOINTS.GET_SESSION: {
        const getSession = await this._apiService.get(
          param.type + param.sessionToken + '?items=*'
        );
        return getSession;
      }

      case this.VTEX_ENDPOINTS.GET_USER_API: {
        const getUserApi = await this._apiService.get(param.type);
        return getUserApi;
      }
    }
  }

  async sendAviseme(param) {
    const aviseme = await this._apiService.postSemApi(
      param.type,
      param.payload
    );

    return aviseme;
  }

  authenticateModal(language, forceReload) {
    window.vtexid.start({
      locale: language || 'pt-br',
      forceReload: forceReload || true,
    });
    window.scrollTo(0, 0);
  }
}

export default UserService;
