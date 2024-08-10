import React from 'react'

const TestPage = async () => {
    const timeOut = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await timeOut(10000);
    return (
        <div>
            <h1>Test Page</h1>
            <p>This is a test page</p>.
            <p>
                Loaded after 10 seconds.
            </p>.
        </div>
    )
}

export default TestPage
