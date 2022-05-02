import Link from 'next/link';
import Image from 'next/image';


export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/." passHref>
                <Image src={'/images/logo-dark.webp'} alt="" width={200} height={100} /></Link>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-mdb-toggle="dropdown" aria-expanded="false" id="callUsMenu">
                        Call Us Today
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="callUsMenu">

                        <li><Link className="dropdown-item" href="tel:16048553315" target="_blank" rel="noreferrer">
                            604-855-3315 - Abbotsford Campus </Link>

                        </li>
                        <li><Link className="dropdown-item" href="tel:16045324040" target="_blank" rel="noreferrer">
                            604-532-4040 - Langley Campus </Link>

                        </li>

                    </ul>
                </div>


                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/programs">Programs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/locations">Locations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/disease-prevention">Health &amp; Safety</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://my.aolcc.ca/" target="_blank">myAOLCC</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="studentrescddl"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >Student Resources</Link>
                            <ul className="dropdown-menu" aria-labelledby="studentrescddl">
                                <Link className="dropdown-item" href="https://meshcentral.aolccbc.com/agentinvite?c=vR38kiMr6bXihrgE7t5gWvkwTH2Y3ZZoUOL6rXpq6C@MTIcGFedEc1DRze1244MkFk797BYMczpuWilpNRXfyLf2udAetG4Sn@gfwH0Cs0coi32TP2oQCmqXzO0ldJpCiRh0b3lgDYlFgTZZ8XJJhjnGRTl7Igg0cTZAhr733ucRbsvkIBhkYWvIJUam3UCViBn@m6M=" target="_blank">Get Help from
                                    Learning Coach</Link>
                                <Link className="dropdown-item" href="https://aolccbc.tawk.help/" target="_blank">KnowledgeBase</Link> <Link className="dropdown-item" href="/handbook" target="_blank">Student
                                    handbook</Link> <Link className="dropdown-item" href="https://outlook.office.com/mail/inbox"
                                        target="_blank">Outlook Web Access</Link> <Link className="dropdown-item" href="https://here2talk.ca/"
                                            target="_blank">Here2Talk - Free Mental Health Resources</Link> <Link className="dropdown-item"
                                                href="https://acmeweb.academyoflearning.net/Forms/AttendanceLogin.aspx" target="_blank">Attendance
                                    Tracker</Link> <Link className="dropdown-item" href="https://mynew.aolcc.ca" target="_blank">myAOLCC</Link> <Link
                                        className="dropdown-item" href="https://www.youtube.com/watch?v=MowAXB-hPVs" target="_blank">***NEW
                                    Orientation***</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="https://download.respondus.com/lockdown/download.php?id=281950612">Lockdown
                                    Browser Installer</Link>
                                <Link className="dropdown-item" href="https://meshcentral.aolccbc.com/TypingTrainer.exe">TypingTrainer Installer</Link>
                                <Link className="dropdown-item" href="https://anydesk.com/en/download">AnyDesk</Link>
                                <Link className="dropdown-item"
                                    href="https://app.businessconnect.telus.com/download/TELUS%20Business%20Connect.exe">RingCentral</Link>
                            </ul>
                            </li>
                            </ul>
                        </div>



                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
            </nav>
    );
}