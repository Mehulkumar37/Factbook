<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FactBook</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    
</head>
<body>
    <header>
        <div class="header-overlay"></div>
        <div class="header-content">

            <div class="logo">
                <img src="./Image/hp-image/logo.png" alt="Logo">
            </div>

            <div class="user-options">
                <a href="#" class="btn" id="loginBtn">Log In</a>
                <a href="#" class="btn" id="registerBtn">Sign Up</a>
            </div>
            
        </div>

        <p class="quote">"Fact that Educate, Inspire and Amaze"</p>
        
    </header>

    <div class="navigation-menu"> 
        <ul class="menu">
            <li class="active"><a href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href="facts.html"><i class="fas fa-info-circle"></i> Facts</a></li>
            <li><a href="aboutUs.html"><i class="fas fa-users"></i> About Us</a></li>
            <li><a href="contactUs.html"><i class="fas fa-envelope"></i> Contact Us</a></li>
        </ul>
    </div>

    <div class="wrapper" id="popupWrapper">
        <div class="popup-content">
            <span class="icon-close" id="closePopup">
                <ion-icon name="close"></ion-icon>
            </span>
            <div class="form-box login">
                <h2>Login</h2>
                <form id="loginForm" action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" id="email" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" id="password" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox"> Remember me </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="login-register">
                        <p>Don't have an account? <a href="#" class="register-link">Sign Up</a></p>
                    </div>
                </form>
            </div>
            
            <div class="form-box register">
                <h2>Sign Up</h2>
                <form id="registerForm" action="#">
                    <div class="input-box">
                        <span class="icon"><ion-icon name="person"></ion-icon></span>
                        <input type="text" id="username" required>
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" id="regEmail" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" id="regPassword" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" required>I agree to the terms & conditions </label>
                    </div>
                    <button type="submit" class="btn">Sign up</button>
                    <div class="login-register">
                        <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    
    <div class="container">
        <aside class="sidebar">
            <h2>Facts of the day</h2>
            <!-- Sidebar content goes here -->
            <ul class="fact-list">
                <li><strong>Fact 1:</strong> Shortest war: Britain vs. Zanzibar, 38 minutes in 1896.</li>
                <li><strong>Fact 2:</strong> Eternal honey: Archaeologists found 3,000-year-old edible honey in Egyptian tombs.</li>
                <li><strong>Fact 3:</strong> Flamboyance of flamingos: A group of flamingos is called a "flamboyance."</li>
                <li><strong>Fact 4:</strong> Eiffel Tower's summer stretch: It can be 15 cm taller in summer due to heat expansion.</li>
                <li><strong>Fact 5:</strong> Octopus's three hearts: Two pump blood to the gills, one to the body. Their blood is blue.</li>
                <li><strong>Fact 6:</strong> Scotland's unicorn: The national animal is the mythical unicorn.</li>
                <li><strong>Fact 7:</strong> Antarctic desert: It's the largest desert due to low precipitation despite ice.</li>
                <li><strong>Fact 8:</strong> First computer virus: "Elk Cloner" infected Apple II via floppy disks in 1983.</li>
                <li><strong>Fact 9:</strong> Vowel-less word: "Rhythms" is the longest English word without a vowel.</li>
                <li><strong>Fact 10:</strong> Dinosaur water: Every glass of water likely contains molecules that once passed through dinosaurs.</li>

            </ul>
        </aside>

        <main class="main">
            <article id="fact1">
                <img class="hp-images" src="./Image/hp-image/fact7.jpg" alt="#">
                <h2>Random fun facts that blow your mind...</h2>
            </article>
            <article id="fact2">
                <img class="hp-images" src="./Image/hp-image/fact51.jpg" alt="#">
                <h2>Insightful Trivia That Will Expand Your Mind...</h2>
            </article>
            <article id="fact3">
                <img class="hp-images" src="./Image/hp-image/fact61.jpg" alt="#">
                <h2>Extraordinary Facts from Around the Globe...</h2>
            </article>
            <article id="fact4">
                <img class="hp-images" src="./Image/hp-image/fact106.jpg" alt="#">
                <h2>Fascinating Insights into the World...</h2>
            </article>
            <article id="fact5">
                <img class="hp-images" src="./Image/hp-image/fact127.jpg" alt="#">
                <h2>The Wow Factor: Mind-Blowing Facts to Expand Your Knowledge</h2>
            </article>
            <article id="fact6">
                <img class="hp-images" src="./Image/hp-image/fact170.jpg" alt="#">
                <h2>Mind-Blowing Fun Facts You Never Knew – Expand Your Knowledge Today!</h2>
            </article>
            <article id="fact7">
                <img class="hp-images" src="./Image/hp-image/fact198.jpg" alt="#">
                <h2>Unbelievable Fun Facts Unveiled – Prepare to Be Amazed!</h2>
            </article>
            <article id="fact8">
                <img class="hp-images" src="./Image/hp-image/fact245.jpg" alt="#">
                <h2>Discover Fascinating Fun Facts – Broaden Your Perspective!</h2>
            </article>
            <article id="fact9">
                <img class="hp-images" src="./Image/hp-image/fact262.jpg" alt="#">
                <h2>Jaw-Dropping Insights You Didn't Know – Enlighten Yourself Now!</h2>
            </article>
            <article id="fact10">
                <img class="hp-images" src="./Image/hp-image/fact310.jpg" alt="#">
                <h2>Explore the Unknown with Incredible Fun Facts – Ignite Your Interest!</h2>
            </article>
            <article id="fact11">
                <img class="hp-images" src="./Image/hp-image/fact345.jpg" alt="#">
                <h2>Fascinating Revelations to Amaze You – Embark on a Journey of Discovery!</h2>
            </article>
            <article id="fact12">
                <img class="hp-images" src="./Image/hp-image/fact354.jpg" alt="#">
                <h2>Expand Your Horizons with Mind-Blowing Fun Facts – Start Exploring!</h2>
            </article>
            <article id="fact13">
                <img class="hp-images" src="./Image/hp-image/fact400.jpg" alt="#">
                <h2>Dive into the Depths of Knowledge – Uncover Remarkable Truths!...</h2>
            </article>
            <article id="fact14">
                <img class="hp-images" src="./Image/hp-image/fact427.jpg" alt="#">
                <h2>Fact Attack: Prepare to Be Stunned by These Truths</h2>
            </article>
            
        </main>
    </div>

    <footer>
        <div class="footer-container">
            <div class="footer-wrapper">
                <div class="footer-widget">
                    <a href="#">
                        <div class="logo">
                            <img src="./Image/hp-image/logo.png" alt="Logo">
                        </div>
                    </a>
                    <div class="address-contact">
                        Address:NIT Raipur,<br> Raipur, Chhattisgarh 492010<br>
                        Phone: 123-456-7890<br>
                        Email: itsfact0913@gmail.com
                    </div>
                </div>
                <div class="footer-widget">
                    <h6>Menu</h6>
                    <ul class="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="facts.html">Facts</a></li>
                        <li><a href="aboutUs.html">About</a></li>
                    </ul>
                </div>
                <div class="footer-widget">
                    <h6>Help &amp; Support</h6>
                    <ul class="links">
                        <li><a href="contactUs.html">Contact Us</a></li>
                        <li><a href="#">Terms &amp; Conditionns</a></li>
                    </ul>
                </div>
                <div class="footer-widget">
                    <h6>Social Media Links</h6>
                    <ul class="socials">
                        <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright-wrapper">
                <p>Desing and Developed by
                    <a href="#" terget="blank">FactBook</a>
                </p>
            </div>
        </div>
        
    </footer>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="./login.js"></script>

    <script>
    
        var articles = document.querySelectorAll("article");
        
        articles.forEach(function(article) {
            article.addEventListener("click", function() {
                var articleId = this.id;
                window.location.href = articleId + ".html";
            });
        });
        </script>

</body>
</html>
