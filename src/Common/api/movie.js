import request from '../utils/request'

// Top250
export const getTopList = (params) => request.qaRequest(params, '/v2/movie/top250')
// 正在热映
export const getTheatersList = (params) => request.qaRequest(params, '/v2/movie/in_theaters')
// 即将上映
export const getSoonList = (params) => request.qaRequest(params, '/v2/movie/coming_soon')
// detail
export const getDetail = (params) => request.qaRequest({}, `/v2/movie/subject/${params.id}`)
