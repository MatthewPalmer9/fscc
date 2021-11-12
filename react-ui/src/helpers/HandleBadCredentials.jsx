import { useHistory } from 'react-router-dom';

export default function HandleBadCredentials() {
    const history = useHistory();

    const executeHandleBadCredentials = () => {
        localStorage.clear()
        history.push("/login")
    }

    return (
        <>
            {executeHandleBadCredentials()}
        </>
    );
};