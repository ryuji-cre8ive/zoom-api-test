import http from '~/middleware/http-config';

class SampleApi {
  SampleApi(){}

  getURLToZoom(): Promise<any> {
    const response = http.get('/api/createurl');
    return response;
  }
}

export default new SampleApi();
