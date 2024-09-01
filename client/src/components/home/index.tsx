import react from 'react';

const Home = () =>{
    return (
        <><div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>React App</title>
            <link rel="stylesheet" href="/../Tasks/client/src/styles/App.css" />
                <link
                    href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
                    rel='stylesheet' />

            </div><div>
                <header>
                    <div className="nav container">
                        <a href="" className="logo">Tas<span>ks</span></a>
                        <div className="nav-right">
                            <a href="/user" className="user-btn"><i className='bx bxs-user'></i></a>
                            <a href="/add" className="write-btn"><i className='bx bx-pencil'></i>Write</a>
                        </div>
                    </div>
                </header>
                <div className="section home" id="home">
                    <div className="home-content">
                        <h2>Quick Tasks</h2>
                        <div className="search-box">
                            <i className='bx bx-search'></i>
                            <input type="search" name="" id="" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Home;