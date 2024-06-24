import React from 'react';
import '../css/Dropdown.css'

const Dropdown = () => {
    return (
        <div id="hero">
            <header id="main-header">
                <a href="/"><img src="images/logo-l5.svg" alt="Logo" /></a>
                <nav>
                    <ul>
                        <li class="has-submenu">
                            <a href="/">Services</a>
                            <ul>
                                <li><a href="/1">Branding</a></li>
                                <li><a href="/2">Web Design</a></li>
                                <li><a href="3">Web Development</a></li>
                                <li><a href="/4">eCommerce</a></li>
                                <li><a href="/5">Print</a></li>
                            </ul>
                        </li>
                        <li><a href="/6">Company</a></li>
                        <li><a href="/7">Blog</a></li>
                        <li><a href="/8">Careers</a></li>
                        <li><a href="/9">Contact</a></li>
                    </ul>
                </nav>

                <button>Get a Quote</button>
            </header>
        </div>)
}

export default Dropdown