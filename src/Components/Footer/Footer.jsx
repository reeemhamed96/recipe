import React from 'react'
import mainlogo from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer >
            <div>
                <div>
                    <a href="">
                        <img src={mainlogo} alt="" />
                        <span>Recipe</span>
                    </a>
                    <span>Route</span>
                </div>
                <hr />
                <p>© 2025 <a href="https://www.facebook.com/EINagy">Nagy Osama™</a>. All Rights Reserved.</p>

            </div>

        </footer>
    )
}
