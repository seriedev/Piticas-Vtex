import Vtexjs from './vtex';

class getMasterDataService extends Vtexjs {
  constructor() {
    super();

    this.entityCode = '';
    this.documentId = '';

    this.VTEX_ENDPOINTS = {
      Documents: () => {
        return `${this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA}/${this.entityCode}/documents`;
      },

      DocumentId: () => {
        return `${this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA}/${this.entityCode}/documents/${this.documentId}`;
      },

      Search: () => {
        return `${this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA}/${this.entityCode}/search?`;
      },

      Fields: () => {
        return `${this.VTEX_BASE_ENDPOINT.BASE_MASTER_DATA}/${this.entityCode}/search`;
      },
    };

    this._apiService = new Vtexjs();
  }

  async getMasterData(param) {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.Documents(param.entityCode): {
        const documents = await this._apiService.get(param.type);
        return documents;
      }

      case this.VTEX_ENDPOINTS.Search(param.params): {
        const search = await this._apiService.get(param.type + param.params);
        return search;
      }

      case this.VTEX_ENDPOINTS.Fields(param.email): {
        const fields = await this._apiService.get(param.type + param.email);
        return fields;
      }
    }
  }

  async addMasterData(param, payload) {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.Documents(param.entityCode): {
        const documents = await this._apiService.patch(param.type, payload);
        return documents;
      }
      case this.VTEX_ENDPOINTS.DocumentId(param.entityCode, param.documentId): {
        const docuementId = await this._apiService.patch(param.type, payload);
        return docuementId;
      }
    }
  }

  async UpdateMasterData() {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.DocumentId(param.entityCode): {
        const documentId = await this._apiService.patch(param.type);
        console.log('documentId', documentId);

        return documentId;
      }
    }
  }

  async DeleteMasterData() {
    switch (param.type) {
      case this.VTEX_ENDPOINTS.DocumentId(param.entityCode, param.documentId): {
        const DocumentId = await this._apiService.delete(param.type);
        return DocumentId;
      }
    }
  }
}

export default getMasterDataService;
