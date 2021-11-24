export const API_ROOT = process.env.REACT_APP_API_URL;

const JWT_TOKEN = localStorage.getItem("token");

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + JWT_TOKEN
    };
};

const headersNoJwt = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
};

const login = data => {
    return fetch(`${API_ROOT}/user/login`, {
        method: "POST",
        headers: headersNoJwt(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
};

const authcheck = () => {
    return fetch(`${API_ROOT}/user/authcheck`, {
        method: "GET",
        headers: headers(),
    }).then(resp => resp.json());
}

const authenticate = data => {
    return fetch(`${API_ROOT}/user/authenticate`, {
        method: "POST",
        headers: headersNoJwt(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

const logout = data => {
    return fetch(`${API_ROOT}/user/logout`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

const employeeAll = () => {
    return fetch(`${API_ROOT}/employee/all`, {
        headers: headers(),
    }).then(resp => resp.json());
}

const employeeById = (id) => {
    return fetch(`${API_ROOT}/employee/${id}`, {
        headers: headers(),
    }).then(resp => resp.json());
};

const createEmployee = data => {
    return fetch(`${API_ROOT}/employee/create`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
};

const updateEmployee = data => {
    return fetch(`${API_ROOT}/employee/update`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
};

const deleteEmployee = async data => {
    return fetch(`${API_ROOT}/employee/delete`, {
        method: "DELETE",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(resp => resp.json());
};

export const api = {
    login_service: {
        login,
        authcheck,
        authenticate,
        logout,
    },

    employee_service: {
        employeeAll,
        employeeById,
        createEmployee,
        updateEmployee,
        deleteEmployee,
    },
};