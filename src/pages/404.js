import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE } from 'routes/route-path';

export function NotFoundPage() {
    return (
        <div
            dir='ltr'
            className='flex-col h-screen w-screen flex items-center justify-center'
        >
            <h3 className='text-xl'>404 | Not Found</h3>
            <br />
            <Link to={LOGIN_PAGE_ROUTE}>Back To Home</Link>
        </div>
    );
}
