export default function Profile(props) {
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <body>
        <div class='columns'>
            <div class='container profile'>
                <div class='modal' id='edit-preferences-modal'>
                    <div class='modal-background'></div>
                    <div class='modal-card'>
                        <header class='modal-card-head'>
                            <p class='modal-card-title'>Edit Preferences</p>
                            <button class='delete'></button>
                        </header>
                        <section class='modal-card-body'>
                            <label class='label'>Name</label>
                            <p class='control'>
                                <input class='input' placeholder='Text input' type='text'>
                            </p>
                            <label class='label'>Username</label>
                            <p class='control has-icon has-icon-right'>
                                <input class='input' placeholder='Text input' type='text' value='pmillerk'>
                            </p>
                            <label class='label'>Email</label>
                            <p class='control has-icon has-icon-right'>
                                <input class='input' placeholder='Email input' type='text' value='hello@'>
                                <i class='fa fa-warning'></i>
                                <span class='help is-danger'>This email is invalid</span>
                            </p>
                            <div class='control'>
                                <div class='control-label is-pulled-left'>
                                    <label class='label'>Date of Birth</label>
                                </div>
                                <span>
              <span class='select'>
                <select>
                  <option>Month</option>
                  <option>With options</option>
                </select>
              </span>
              <span class='select'>
                <select>
                  <option>Day</option>
                  <option>With options</option>
                </select>
              </span>
              <span class='select'>
                <select>
                  <option>Year</option>
                  <option>With options</option>
                </select>
              </span>
            </span>
                            </div>
                            <label class='label'>Description</label>
                            <p class='control'>
                                <textarea class='textarea' placeholder='Describe Yourself!'></textarea>
                            </p>
                            <div class='content'>
                                <h1>Optional Information</h1>
                            </div>
                            <label class='label'>Phone Number</label>
                            <p class='control has-icon has-icon-right'>
                                <input class='input' placeholder='Text input' type='text' value='+1 *** *** 0535'>
                            </p>
                            <label class='label'>Work</label>
                            <p class='control has-icon has-icon-right'>
                                <input class='input' placeholder='Text input' type='text'
                                       value='Greater Washington Publishing'>
                            </p>
                            <label class='label'>School</label>
                            <p class='control has-icon has-icon-right'>
                                <input class='input' placeholder='Text input' type='text'
                                       value='George Mason University'>
                            </p>
                        </section>
                        <footer class='modal-card-foot'>
                            <a class='button is-primary modal-save'>Save changes</a>
                            <a class='button modal-cancel'>Cancel</a>
                        </footer>
                    </div>
                </div>
                <div class='section profile-heading'>
                    <div class='columns is-mobile is-multiline'>
                        <div class='column is-2'>
          <span class='header-icon user-profile-image'>
            <img alt='' src='../src/main/resources/static/img/IMG_3801.jpg'>
          </span>
                        </div>
                        <div class='column is-4-tablet is-10-mobile name'>
                            <p>
                                <span class='title is-bold'>Anthony Hernandez</span>
                                <br>
                                <a class='button is-primary is-outlined' href='#' id='edit-preferences'
                                   style='margin: 5px 0'>
                                    Edit Preferences
                                </a>
                                <br>
                            </p>
                            <p class='tagline'>
                                Hello, My Name is Anthony Hernandez I am a virtual dj who would love to provide my
                                services for
                                your events please look at my list of services and let me know if you need anything.
                            </p>
                        </div>
                        <div class='column is-2-tablet is-4-mobile has-text-centered'>
                            <p class='stat-val'>30</p>
                            <p class='stat-key'>services</p>
                        </div>
                        <div class='column is-2-tablet is-4-mobile has-text-centered'>
                            <p class='stat-val'>10</p>
                            <p class='stat-key'>likes</p>
                        </div>
                        <div class='column is-2-tablet is-4-mobile has-text-centered'>
                            <p class='stat-val'>3</p>
                            <p class='stat-key'>lists</p>
                        </div>
                    </div>
                </div>
                <div class='profile-options is-fullwidth'>
                    <div class='tabs is-fullwidth is-medium'>
                        <ul>
                            <li class='link'>
                                <a>
              <span class='icon'>
                <i class='fa fa-list'></i>
              </span>
                                    <span>My Lists</span>
                                </a>
                            </li>
                            <li class='link is-active'>
                                <a>
              <span class='icon'>
                <i class='fa fa-thumbs-up'></i>
              </span>
                                    <span>My Reviews</span>
                                </a>
                            </li>
                            <li class='link'>
                                <a>
              <span class='icon'>
                <i class='fa fa-search'></i>
              </span>
                                    <span>My Searches</span>
                                </a>
                            </li>
                            <li class='link'>
                                <a>
              <span class='icon'>
                <i class='fa fa-balance-scale'></i>
              </span>
                                    <span>My OddJobs</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class='box' style='border-radius: 0px;'>
                    <!-- Main container -->
                    <div class='columns'>
                        <div class='column is-2-tablet user-property-count has-text-centered'>
                            <p class='subtitle is-5'>
                                <strong></strong>
                                20
                                <br>
                                Services
                            </p>
                        </div>
                        <div class='column is-8'>
                            <p class='control has-addons'>
                                <input class='input' placeholder='Search for services' style='width: 100% !important'
                                       type='text'>
                                <button class='button'>
                                    Search
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class='columns is-mobile'>
                    <div class='column is-3-tablet is-6-mobile'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/5.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#1</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3-tablet is-6-mobile'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/4.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#2</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/3.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#3</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/2.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#4</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                </div>
                <div class='columns is-mobile'>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/1.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#5</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/6.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#6</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='../src/main/resources/static/img/1.jpeg'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#7</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src=''>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#8</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking
                                        in and
                                        clicking out of text area) - these are unique to the user - they will show up as
                                        part of
                                        a saved listings' info here - but adding notes to a property does not
                                        automatically
                                        create a saved listing. Likewise, removing this proeprty from saved listings
                                        does not
                                        auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Hire</a>
                                <a class='card-footer-item'>ShareLink</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    `;
}

// fn1() {fn2(); fn3();}

// fn2(){}
