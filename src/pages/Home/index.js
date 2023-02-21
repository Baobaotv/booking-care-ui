import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home Page1</h2>
            <p>aloalo</p>
            <Link to={'/upload'}>
                <p>chuyen huong</p>
            </Link>
        </div>
    );
}

export default Home;
