<script setup>

</script>

<template>
    <div class="full">
        <div class="top">
            <h2>Ready to start your real estate journey with us?</h2>
            <div class="section">
                <button class="secondary">Log in</button>
                <button class="primary">Get Started</button>
            </div>
      
        </div>
        <hr>
        <div class="footer">
            <div class="navigation">
                <div class="nav socials">
                    <div class="logo">
                        <!-- <img src="" alt="Logo" width="150"> -->
                        <h3>PropertyBazaar</h3>
                    </div>
                    <p>The number one real estate marketplace</p>
                    <div class="icons">
                        <img class="icon" src="/facebook.png" alt="Facebook" width="30">
                        <img class="icon" src="/twitter.png" alt="Twitter" width="30">
                        <img class="icon" src="/instagram.png" alt="Instagram" width="30">
                        <img class="icon" src="/linkedin.png" alt="LinkedIn" width="30">
                    </div>
                </div>

                <div class="nav links">
                    <h3>Navigation</h3>
                    <NuxtLink href="#"> Buy</NuxtLink>
                    <NuxtLink href="#"> Sell</NuxtLink>
                    <NuxtLink href="#"> Blog</NuxtLink>                    
                </div>

                <div class="nav company">
                    <h3>Company</h3>
                    <NuxtLink href="#"> About Us</NuxtLink>
                    <NuxtLink href="#"> Contact</NuxtLink>
                    <NuxtLink href="#"> Press</NuxtLink>                    
                    <NuxtLink href="#"> Investors</NuxtLink>
                    <NuxtLink href="#"> Careers</NuxtLink>
                </div>

                <div class="nav office">
                    <h3>Office</h3>
                    <p>123 Main Street, Suite 400<br>Cityville, ST 12345<br>Email: info@propertybazaar.com</p>
                </div>
            </div>

            <div class="bottom">
                <div class="copyright">
                    <p>© 2026 PropertyBazaar. All rights reserved.</p>                     
                </div>
                <div class="privacy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div> 
    </div>

</template>

<style scoped>
    .full{
        margin-top: 50px;
        padding: 40px;
        color: var(--white);
        background-color: var(--text-dark);
    }
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .section{
        display: flex;
        width: fit-content;
        gap: 10px;
    }
    .secondary{
        background-color: var(--white);
        color: var(--accent-dark);
        border: none;
    }
    .logo{
        display: flex;
        gap: 10px;
    }
    .icons{
        display: flex;
        gap: 10px;
    }
    .navigation{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 50px;
        gap: 20px;
        flex-wrap: wrap;
    }
    .nav{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .privacy{
        display: flex;
        gap: 20px;
    }
</style>
