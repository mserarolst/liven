const logIn = async (values) => {
    let message;
    await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then((response) => {
            if (response.ok) {
                message = 'Login amb èxit';
            } else {
                message = 'error';
            }
            return response.json();
        })
        .then((json) => {
            if (message !== 'error') {
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('user', JSON.stringify(json));
            }
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return message;
};

const get = async (url) => {
    let message;
    let data;
    await fetch('/api/' + url)
        .then((response) => {
            if (response.ok) {
                message = 'Dades rebudes';
            } else {
                message = 'Error';
            }
            return response.json();
        })
        .then((json) => {
            data = json;
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return { data, message };
};

const getUser = async (token) => {
    let message;
    // console.log('Token ' + token);
    await fetch('/api/auth/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + token,
        },
    })
        .then((response) => {
            if (response.ok) {
                message = 'ok';
            } else {
                message = 'error';
            }
            return response.json();
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return message;
};

const search = async (values) => {
    let message;
    let result;
    let url = 'search-products?';
    let primer = true;
        if (values.dona_data != "") {
            primer ? url+='product_family='+values.product_family  : url+='&product_family='+values.product_family ;
            if (primer) primer = false;
        }
        if (values.dona_product != "") {
            primer ? url+='claim='+values.claim  : url+='&claim='+values.claim ;
            if (primer) primer = false;
        }
        if (values.dona_quefem != "") {
            primer ? url+='filter='+values.filter : url+='&filter='+values.filter;
            if (primer) primer = false;
        }
        if (values.dona_quefem != "") {
            primer ? url+='value='+values.value : url+='&value='+values.value;
            if (primer) primer = false;
        }

    await fetch('/api/' + url)
        .then((response) => {
            if (response.ok) {
                message = 'Dades rebudes';
            } else {
                message = 'Error';
            }
            return response.json();
        })
        .then((json) => {
            result = json;
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return { result, message };
}

const searchName = async (values) => {
    let message;
    let result;
    let url = 'search-products-by-name?name='+values.name;

    await fetch('/api/' + url)
        .then((response) => {
            if (response.ok) {
                message = 'Dades rebudes';
            } else {
                message = 'Error';
            }
            return response.json();
        })
        .then((json) => {
            result = json;
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return { result, message };
}

const create = async (values, url) => {
    let message;
    var form_data = new FormData();

    for (var key in values) {
        form_data.append(key, values[key]);
    }
    await fetch('/api/' + url, {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: form_data,
    })
        .then((response) => {
            if (response.ok) {
                switch (url) {
                    case 'create-lot':
                        message = 'Lot afegit amb èxit!';
                        break;
                    case 'create-order':
                        message = 'Comanda creada correctament!';
                        break;
                    case 'create-product':
                        message = 'Produce creat correctament!';
                        break;
                    default:
                        message = 'Tot correcte!';
                }
            } else {
                message = 'error';
            }
            return response.json();
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return message;
};

const createOrder = async (values) => {
    let result = {
        message: '',
        data: null,
    };

    await fetch('/api/create-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then((response) => {
            if (response.ok) {
                result.message = 'Comanda creada correctament!';
            } else {
                result.message = 'error';
                result.data = null;
            }
            return response.json();
        })
        .then((data) => {
            result.data = data;
        })
        .catch((e) => {
            result.message = 'error';
            console.log(e);
        });

    return result;
};

const createOrderLot = async (values) => {
    let result = {
        message: '',
        data: null,
    };

    await fetch('/api/create-orderlot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then((response) => {
            if (response.ok) {
                result.message = 'Comanda-Lot creat correctament!';
            } else {
                result.message = 'error';
                result.data = null;
            }
            return response.json();
        })
        .then((data) => {
            result.data = data;
        })
        .catch((e) => {
            result.message = 'error';
            console.log(e);
        });

    return result;
};

const deleteElement = async (url, label, id) => {
    let message;
    var form_data = new FormData();
    form_data.append(label, id);

    await fetch('/api/' + url, {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: form_data,
    })
        .then((response) => {
            if (response.ok) {
                message = 'Eliminat';
            } else {
                message = 'error';
            }
            return response.json();
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return message;
};

const update = async (values, url) => {
    let message;
    var form_data = new FormData();

    for (var key in values) {
        form_data.append(key, values[key]);
    }
    await fetch('/api/' + url, {
        method: 'PATCH',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: form_data,
    })
        .then((response) => {
            if (response.ok) {
                switch (url) {
                    case 'update-lot-stock':
                        message = 'Estoc actualitzat amb èxit!';
                        break;
                    default:
                        message = 'Dades actualitzades correctament!';
                }
            } else {
                message = 'error';
            }
            return response.json();
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return message;
};

const sendEmail = async (values) => {
    let result = {
        message: '',
        data: null,
    };
    var form_data = new FormData();

    for (var key in values) {
        form_data.append(key, values[key]);
    }

    await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: form_data,
    })
        .then((response) => {
            if (response.ok) {
                result.message = 'Mail enviat correctament!';
            } else {
                result.message = 'error';
                result.data = null;
            }
            return response.json();
        })
        .then((data) => {
            result.data = data;
        })
        .catch((e) => {
            result.message = 'error';
            console.log(e);
        });

    return result;
};

const changeState = async (id, values) => {
    let message;
    var form_data = new FormData();

    for (var key in values) {
        form_data.append(key, values[key]);
    }
    await fetch('/api/change-order-state', {
        method: 'PATCH',
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
        },
        body: form_data,
    })
        .then((response) => {
            if (response.ok) {
                message = 'Estat canviat';
            } else {
                message = 'error';
            }
            return response.json();
        })
        .catch((e) => {
            message = 'error';
            console.log(e);
        });

    return message;
};

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
};

export {
    logIn,
    get,
    getUser,
    create,
    deleteElement,
    update,
    createOrder,
    createOrderLot,
    sendEmail,
    changeState,
    search,
    searchName
};
