export default function Footer() {
    return (
        <>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>Big<span>bazar</span></h3>

                    <p class="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">Big Bazar © 2022</p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>

                </div>

                <div class="footer-right">

                    <p>Contact Us</p>

                    <form action="#" method="post">

                        <input type="text" name="email" placeholder="Email"/>
                        <textarea name="message" placeholder="Message"></textarea>
                        <button mailto="yorubenyo@gmail.com">Send</button>

                    </form>
                </div>
            </footer>
        </>
    )
};