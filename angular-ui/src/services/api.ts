import { environment } from '../environments/environment';
const API_ROOT: any = environment.apiURL;

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

const login = async (data: any) => {
    const resp = await fetch(`${API_ROOT}/user/login`, {
    method: "POST",
    headers: headersNoJwt(),
    body: JSON.stringify(data)
  });
  return resp.json();
};

const authcheck = async () => {
    const resp = await fetch(`${API_ROOT}/user/authcheck`, {
    method: "GET",
    headers: headers(),
  });
  return resp.json();
}

const authenticate = async (data: any) => {
    const resp = await fetch(`${API_ROOT}/user/authenticate`, {
    method: "POST",
    headers: headersNoJwt(),
    body: JSON.stringify(data)
  });
  return resp.json();
}

const logout = async (data: any) => {
    const resp = await fetch(`${API_ROOT}/user/logout`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  });
  return resp.json();
}

const employeeAll = async () => {
    const resp = await fetch(`${API_ROOT}/employee/all`, {
    headers: headers(),
  });
  return resp.json();
}

const employeeById = async (id: number) => {
    const resp = await fetch(`${API_ROOT}/employee/${id}`, {
    headers: headers(),
  });
  return resp.json();
};

const createEmployee = async (data: any) => {
    const resp = await fetch(`${API_ROOT}/employee/create`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  });
  return resp.json();
};

const updateEmployee = async (data: any) => {
    const resp = await fetch(`${API_ROOT}/employee/update`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(data)
  });
  return resp.json();
};

const deleteEmployee = async (data: any) => {
    const resp = await fetch(`${API_ROOT}/employee/delete`, {
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify(data)
  });
  return resp.json();
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
