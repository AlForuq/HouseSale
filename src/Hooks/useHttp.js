const { REACT_APP_BASE_URL} = process.env;

export const useHttp = () => {
    const request = async ({
        url = '',
        method = 'GET',
        headers = {},
        body = null,
        token = false,
    }) => {
        if (token) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            headers['Content-type'] = 'application/json'
        }

        let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
            method, 
            headers,
            body: method === 'GET' ? null : JSON.stringify(body),
        }).then((res) => res.json())
        
        if (res?.success) {
            return res
        } else {
            throw new Error(res?.message || 'Something is Wrong')
        }
    }

    return {request}
}