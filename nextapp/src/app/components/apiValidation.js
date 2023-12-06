'use client';
export default function ApiValidator({status}) {

    function message (statusCode) {
        let message = ''
        switch(statusCode){
            case 401: message = 'Unauthorised';break;
            case 500: message = 'Bad gateway';break;
            case 401: message = 'not found';break;
            default : message = 'Network error, please retry';break;
        }
        return message;
    }
    
    return (
        <div>
        <h2 style={{color: 'red'}}>{status && message(status.status)}</h2>
        </div>
    )
}