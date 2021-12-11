const base = 'https://yalantis-react-school-api.yalantis.com/api/v1/'

const api_consts = {
    'BASE': {
        '_':base,
        'PRODUCTS':{
            '_':`${base}products/`,
            'ID_FUN': id => `${base}products/${id}`
        }
    }
};
export default api_consts;