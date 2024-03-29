import request from '../utils/request'

export const getList = (params) => request.qaRequest(params, '/v2/music/search')

export const getDetail = (params) => request.qaRequest({}, `/v2/music/search/${params.id}`)
