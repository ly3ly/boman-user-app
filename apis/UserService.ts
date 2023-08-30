
export interface ApiResponse {
    // 根据实际接口响应定义类型
    code: number | string;
    data: any;
}

const BASE_URL = 'http://localhost:11223/api/v1'
const customFetch = <T>(url: string, options: RequestInit = {}): Promise<T> => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json() as Promise<ApiResponse>;
            })
            .then(data => {
                if (data.code === 0) {
                    resolve(data.data as T);
                } else {
                    reject(new Error('API response error'));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const apiGet = <T>(url: string): Promise<T> => {
    return customFetch<T>(url, {
        method: 'GET',
        headers: {
            // 可添加请求头信息
        },
        // 可添加其他请求配置
    });
};

export const apiPost = <T>(url: string, body: any): Promise<T> => {
    return customFetch<T>(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 可添加其他请求头信息
        },
        body: JSON.stringify(body),
        // 可添加其他请求配置
    });
};

// 类似方式定义 apiPut 和 apiDelete 函数


export const userLogin = (params: any) => {
    return apiPost('/user/login', params)
}
