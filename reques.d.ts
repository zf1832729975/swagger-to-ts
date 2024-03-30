/**
 * 请求配置文件
 */
import { AxiosRequestConfig } from 'axios';
export interface RequestOptions extends AxiosRequestConfig {
}
interface RequestParams {
    url: string;
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    data?: any;
    params?: any;
    headers?: any;
}
declare function requestAdapter({ url, method, data, params, headers }: RequestParams, options?: RequestOptions): Promise<any>;
export default requestAdapter;