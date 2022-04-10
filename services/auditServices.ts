import API from './api';

export default {
  getAudit(): Promise<any> {
    return API.get('/a2fbc23e-069e-4ba5-954c-cd910986f40f');
  }
};
