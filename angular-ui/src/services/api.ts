const API_ROOT: any = process.env.ANGULAR_APP_API_URL;

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

const login = (data: any) => {
    return fetch(`${API_ROOT}/user/login`, {
        method: "POST",
        headers: headersNoJwt(),
        body: JSON.stringify(data)
    }).then((resp: any) => resp.json());
};

const authcheck = () => {
    return fetch(`${API_ROOT}/user/authcheck`, {
        method: "GET",
        headers: headers(),
    }).then((resp: any) => resp.json());
}

const authenticate = (data: any) => {
    return fetch(`${API_ROOT}/user/authenticate`, {
        method: "POST",
        headers: headersNoJwt(),
        body: JSON.stringify(data)
    }).then((resp: any) => resp.json());
}

const logout = (data: any) => {
    return fetch(`${API_ROOT}/user/logout`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then((resp: any) => resp.json());
}

const employeeAll = () => {
    return fetch(`${API_ROOT}/employee/all/token=${JWT_TOKEN}`, {
        headers: headers(),
    }).then((resp: any) => resp.json());
}

const employeeById = (id: number) => {
    return fetch(`${API_ROOT}/employee/${id}/token=${JWT_TOKEN}`, {
        headers: headers(),
    }).then((resp: any) => resp.json());
};

const createEmployee = (data: any) => {
    return fetch(`${API_ROOT}/employee/create/token=${JWT_TOKEN}`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then((resp: any) => resp.json());
};

const updateEmployee = (data: any) => {
    return fetch(`${API_ROOT}/employee/update/token=${JWT_TOKEN}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify(data)
    }).then((resp: any) => resp.json());
};

const deleteEmployee = (data: any) => {
    return fetch(`${API_ROOT}/employee/delete/token=${JWT_TOKEN}`, {
        method: "DELETE",
        headers: headers(),
        body: JSON.stringify(data)
    }).then((resp: any) => resp.json());
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
