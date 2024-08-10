import axios from 'axios';
import React from 'react'

const TestPage = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhZjQ1NzMwNjgwMTdhZWZhNTA0NDY1Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTcyMzI2OTU1MiwiZXhwIjoxNzIzMzU1OTUyfQ.ZVa-t9Z_NH-THm_YS4lww3TmnVMifooiNjIZxLnKNv0";

    const apiURL = "https://20ca-103-184-92-81.ngrok-free.app";

    const response = await axios.get(`${apiURL}/api/exercises`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        console.log(error);
    });
    return (
        <div>
            <h1>Test Page</h1>
            <p>This is a test page</p>.

            <hr className='my-20' />
            <pre>
                {
                    response ? JSON.stringify(response, null, 2) : "ERROR"
                }
            </pre>
        </div>
    )
}

export default TestPage
