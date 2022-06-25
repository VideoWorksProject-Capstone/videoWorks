export default function Profile(props) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            
            <style>
                

.profile-div{
    width: 100%;
    overflow: hidden;
}

.profile-divider {
    width: calc(100% - 60px);
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 60px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
}


/*PROFILE SELLER SECTION*/
.profile-seller{
    width: 300px;
    height: 100%;
    margin-bottom: auto;
}

.profile-seller__user-image-wrapper{
    position: relative;
    width: 100%;
    margin: 0 auto 90px auto;
}

.profile-seller__user-image{
    clip-path: circle(50% at 50% 50%);
    width: 60%;
    pointer-events: none;
    /*scale: 1.4;*/
}

.profile-seller__contact-dropdown{
    min-width: 250px;
    position: relative;
    bottom: 40px;
    right: -180px;
    cursor: pointer;
    z-index: 99;
}

.profile-seller__contact-bubble{
    width: 80px;
    /*top: 0;*/
    bottom: -30px;
    left: 10px;
    cursor: pointer;
    position: relative;
    /*z-index: 90;*/
}

.profile-seller__contact-dropdown ul{
    /*width: 100%;*/
    max-width: 250px;
    background: var(--white);
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    /*right: -200px;*/
    /*bottom: -160px;*/
    top: 100%;
    /*transform: translateY(-25px);*/
    opacity: 0;
    transition: transform 350ms ease-in-out,opacity 350ms ease-in-out;
    pointer-events: none;

}
.profile-seller__contact-dropdown ul.slidedown{
    transform: translateY(55px);
    opacity: 1;
    pointer-events: all;
}


.profile-seller__contact-dropdown ul li{
    transition: background-color 400ms ease-in-out;
    /*padding: 20px;*/
    cursor: pointer;

}
.profile-seller__user-image-wrapper ul li:not(.profile-seller__user-image-wrapper ul li:last-child){
    border-bottom: #dcdcdc solid 1px;
}
.profile-seller__user-image-wrapper ul li:hover{
    background-color: #d9c6ff;

}
.profile-seller__contact-dropdown ul a{
    color: var(--main-black);
    font-size: 1.8rem;
    /*transition: color .9s ease-in-out;*/
    display: inline-block;
    padding: 15px;
    text-decoration: underline;
    /*z-index: 1;*/
    cursor: pointer;
}
.profile-seller__contact-dropdown ul i{
    color: var(--main-black);
    margin-right: 2rem;
    /*transition: color .9s ease-in-out;*/

}

/*BIO*/
.profile-seller__seller-name{
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 5rem;
    text-align: left;
}
.profile-seller__talent-description{
    font-size: 2.5rem;
    font-weight: 400;
}
.profile-seller__seller-bio-title{
    font-size: 5.5rem;
    font-weight: 700;
}
.profile-seller__seller-bio{
    font-size: 2rem;
}
/*PROFILE ELEMENTS*/
.profile-elements{
    flex: 1;
    justify-content: start;
}

.section-cards{
    width:90%;
    min-width: 280px;
    background-color: #131313;
    border-radius: 15px;
    overflow: hidden;
    margin: 0 auto;

    padding: 10px 25px 25px 25px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
.profile-services{
    margin-bottom: 30px;
}
.profile-services p, .fa-clock{
    color: var(--white);
}

.profile-section-titles{
    font-size:3rem;
    font-weight: 400;
    padding-bottom: 4px;
    margin-bottom: 25px;
    position: relative;
    color: var(--white);
}
.profile-section-titles::before{
    content: "";
    position: absolute;
    height: 3px;
    width: 24px;
    background-color: #525252;
    bottom: 0;
    border-radius: 15px;
}

/*SERVICES CARDS*/
.profile-services__card{
    width: 100%;
    height: fit-content;
    background-color: var(--purple);
    padding: 18px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

}

.profile-services__card:not(.profile-services__card:last-of-type){
    margin-bottom: 15px;
}

.profile-services__service-image{
    width: 80px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.profile-services__profile-details{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 10px;
    height: 100%;
    flex: 1;

}
.profile-details__element-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
/*.profile-details__element-wrapper .fa-crown{*/
/*    color: var(--main-black);*/
/*    margin-right: 1rem;*/
/*}*/
.profile-details__title{
    font-size: 2rem;
    font-weight: 500;
}
.profile-details__title:hover{
    cursor: pointer;
    text-decoration: underline;
}
.profile-details-delivery-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.profile-details__booking-btn{
    width: 110px;
    height: 35px;
    /*background-color: #fa9069;*/
    background-color: var(--pink);
    /*border: var(--orange) solid 2px;*/
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 500;
    border-radius: 6px;
    cursor:pointer;
    transition: all 250ms ease;
    /*box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;*/
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}
.profile-details__booking-btn:hover{
    background: #c070a4;
    color: var(--white);
}
.profile-details__booking-btn:active{
    transform: scale(.9);
}


/*PROFILE REVIEWS*/
.profile-reviews-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.profile-reviews-wrapper > img{
    width: 13%;
    min-width: 90px;
    border-radius: 50%;
    /*border: black solid 2px;*/
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}



/*MEDIA QUERIES FOR MOBILE AND TABLET*/
@media screen and (max-width: 880px) {
    .profile-divider {
        width: calc(100% - 10px);
    }
    .profile-divider {
        flex-direction: column;
        gap: 45px;
    }
    .profile-services__service-image{
        /*width: 50%;*/
        max-width: 80px;
        align-self: start;
    }
    .profile-elements{
        width: 100%;
    }
    .profile-services__title{
        font-size:2.5rem;
        font-weight: 400;
        padding-bottom: 4px;
        margin-bottom: 25px;
        position: relative;
        color: var(--white);
    }
    .profile-services__card{
        overflow: hidden;
    }
    .profile-details__title{
        font-size: 1.7rem;
        font-weight: 500;
       text-align: left;
    }
    .profile-details-delivery-container{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        /*width: 100%;*/
        gap: 6px;
    }
    .profile-details__booking-btn{
        width: 100px;
        height: 30px;
        color: var(--white);
        font-size: 1.4rem;
    }

/*    BUBBLE DROPDOWN*/
    .profile-seller__contact-dropdown{
       bottom: 30px;
        right: -50px;
    }

    .profile-seller__contact-dropdown ul{

        transition: all 350ms ease-in-out;

    }
}
            </style>
        </head>
        <body>
<!--        BEGIN PROFILE -->
        <main class="profile-div">
    <section class="profile-divider">

        <!--Begin Profile Seller-->
        <div class="profile-seller">
            <div class="profile-seller__user-image-wrapper">
<!--                <img src="images/smiling-woman1.jpg" alt="" class="profile-seller__user-image">-->

<img src="${props.user.photo}" alt="" class="profile-seller__user-image">
                <img src="images/Chat.png" alt="" tabindex="0" class="profile-seller__contact-bubble">
                <div class="profile-seller__contact-dropdown" tabindex="0">

                    <ul>
                        <li tabindex="0"><a href="#">Get a quote <i class="fa-solid fa-arrow-right"></i></a></li>
                        <li
                                tabindex="0"><a href="https://google.com">Ask a question
                            <i class="fa-solid fa-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="profile-seller__seller-info-wrapper">
            
                <p class="profile-seller__seller-name">${props.user.name}<br><span
                        class="profile-seller__talent-description">Hip-Hop DJ</span></p>
<!--                        <p class="profile-seller__seller-name">Tony Hawk<br><span-->
<!--                        class="profile-seller__talent-description">Hip-Hop DJ</span></p>-->
                <div class="profile-seller__seller-bio">
                    <p class="profile-seller__seller-bio-title">Bio:</p>
                    
<!--                    <p class="profile-seller__seller-bio">Made in the USA. Made to DJ. I'm gonna blowout your speaks.</p>-->
                    <p class="profile-seller__seller-bio">${props.user.bio}</p>
                </div>

            </div>
        </div>
        <!--End Profile Seller-->

        <!--Begin Profile-Elements-->
        <section class="profile-elements">
            <div class="profile-services section-cards">
                <h2 class="profile-services__title profile-section-titles">Services Offered</h2>
                <div class="profile-services__card">
                    <img src="https://source.unsplash.com/200x200" alt="random"
                         class="profile-services__service-image">
                    <div class="profile-services__profile-details">
                        <div class="profile-details__element-wrapper">
                            <!--                            <i class="fa-solid fa-crown"></i>-->
                            <p class="profile-details__title">I will DJ your party for 4 hours</p>
                        </div>

                        <div class="profile-details-delivery-container">
                            <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                delivery</p>
                            <button class="profile-details__booking-btn">Book Now</button>
                        </div>

                    </div>
                </div>
                <div class="profile-services__card">
                    <img src="https://source.unsplash.com/200x200" alt="random"
                         class="profile-services__service-image">
                    <div class="profile-services__profile-details">
                        <div class="profile-details__element-wrapper">
                            <!--                            <i class="fa-solid fa-crown"></i>-->
                            <p class="profile-details__title">I will DJ your party for 4 hours</p>
                        </div>

                        <div class="profile-details-delivery-container">
                            <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                delivery</p>
                            <button class="profile-details__booking-btn">Book Now</button>
                        </div>

                    </div>
                </div>
                <div class="profile-services__card">
                    <img src="https://source.unsplash.com/200x200" alt="random"
                         class="profile-services__service-image">
                    <div class="profile-services__profile-details">
                        <div class="profile-details__element-wrapper">
                            <!--                            <i class="fa-solid fa-crown"></i>-->
                            <p class="profile-details__title">I will DJ your party for 4 hours</p>
                        </div>

                        <div class="profile-details-delivery-container">
                            <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                delivery</p>
                            <button class="profile-details__booking-btn">Book Now</button>
                        </div>

                    </div>
                </div>
                <div class="profile-services__card">
                    <img src="https://source.unsplash.com/200x200" alt="random"
                         class="profile-services__service-image">
                    <div class="profile-services__profile-details">
                        <div class="profile-details__element-wrapper">
                            <!--                            <i class="fa-solid fa-crown"></i>-->
                            <p class="profile-details__title">I will DJ your party for 4 hours</p>
                        </div>

                        <div class="profile-details-delivery-container">
                            <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                delivery</p>
                            <button class="profile-details__booking-btn">Book Now</button>
                        </div>

                    </div>
                </div>
                <div class="profile-services__card">
                    <img src="https://source.unsplash.com/200x200" alt="random"
                         class="profile-services__service-image">
                    <div class="profile-services__profile-details">
                        <div class="profile-details__element-wrapper">
                            <!--                            <i class="fa-solid fa-crown"></i>-->
                            <p class="profile-details__title">I will DJ your party for 4 hours</p>
                        </div>

                        <div class="profile-details-delivery-container">
                            <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                delivery</p>
                            <button class="profile-details__booking-btn">Book Now</button>
                        </div>

                    </div>
                </div>
                <div class="profile-services__card">
                    <img src="https://source.unsplash.com/200x200" alt="random"
                         class="profile-services__service-image">
                    <div class="profile-services__profile-details">
                        <div class="profile-details__element-wrapper">
                            <!--                            <i class="fa-solid fa-crown"></i>-->
                            <p class="profile-details__title">I will DJ your party for 4 hours</p>
                        </div>

                        <div class="profile-details-delivery-container">
                            <p class="profile-details__delivery-time"><i class="fa-regular fa-clock"></i> 2 day
                                delivery</p>
                            <button class="profile-details__booking-btn">Book Now</button>
                        </div>

                    </div>
                </div>
            </div>
            <section class="profile-reviews section-cards">
                <h2 class="profile-reviews__title profile-section-titles">Reviews</h2>
                <div class="profile-reviews-wrapper">
                    <img src="https://source.unsplash.com/800x800/?fruit,red" alt="">
                    <img src="https://source.unsplash.com/800x800/?fruit,yellow" alt="">
                    <img src="https://source.unsplash.com/800x800/?fruit,blue" alt="">
                    <img src="https://source.unsplash.com/800x800/?fruit,green" alt="">
                    <img src="https://source.unsplash.com/800x800/?fruit,orange" alt="">
                    <img src="https://source.unsplash.com/800x800/?fruit" alt="">
                </div>

            </section>
        </section>
        <!--End Profile-Elements-->
    </section>
</main>
</body>
        </html>
    `;
}