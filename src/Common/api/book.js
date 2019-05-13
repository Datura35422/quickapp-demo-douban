import request from '../utils/request'

export const getList = (params) => request.qaRequest(params, '/v2/book/search')
