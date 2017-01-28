import { Component, OnInit } from '@angular/core';
import { WindowRef } from './WindowRef';
import {NgsRevealModule} from 'ng2-scrollreveal';
declare var $:any;

@Component({
  selector: 'home',
  styleUrls:  ['css/magnific-popup.css'],
  providers: [ NgsRevealModule ],
  template: `
  <header id='home' [style.height.px]="innerHeight" (window:resize)="onResize($event)">
    <div class='header-content'>
      <div class='header-content-inner'>
        <h1>Optecture</h1>
        <h2>Draw Your Solution - Generate a Quote</h2>
        <hr class='light'>
        <p>Optecture's Powerful Diagram to Quotation Cloud Service will save time, improve accuracy and capture what's needed to grow opportunities.</p>
        <a class='btn btn-primary btn-xl page-scroll' href='#about'>Find Out More</a>
      </div>
   </div>
  </header>
  <section class='bg-primary' id='about'>
     <div class='container'>
        <div class='row'>
          <div class='col-lg-8 col-lg-offset-2 text-center'>
            <h2 class='section-heading'>Draw and Price</h2>
            <hr class='light'>
            <p class='text-faded'>Cloud based software converts sales drawings directly to quotations</p>
            <p class='text-faded'>Capture and Share Requirements, Instantly Generate Quote, Grow Deal Sizes</p>
            <a class='page-scroll btn btn-default btn-xl sr-button' href='#login'>Get Started!</a>
         </div>
      </div>
    </div>
  </section>
  <section id='services' style='background-color: #fff;' [ngsRevealSet]="{ reset:true}" [ngsInterval]="50" [ngsSelector]="'.sr-icons'">
    <div class='container'>
      <div class='row'>
        <div class='col-lg-12 text-center'>
           <h2 class='section-heading'>At Your Service</h2>
           <hr class='primary'>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <div class='col-lg-3 col-md-6 text-center'>
          <div class='service-box'>
             <i class='fa fa-4x fa-object-group text-primary sr-icons'></i>
             <h3>Diagram to Quote</h3>
             <p class='text-muted' style="font-weight:700">Quickly map out solutions using your products and configurations</p>
          </div>
        </div>
        <div class='col-lg-3 col-md-6 text-center'>
           <div class='service-box'>
             <i class='fa fa-4x fa-phone text-primary sr-icons'></i>
             <h3>Ideal for Teleconferences</h3>
             <p class='text-muted' style="font-weight:700">Better capture and communicate customer problems, and quickly close deals</p>
           </div>
        </div>
        <div class='col-lg-3 col-md-6 text-center'>
          <div class='service-box'>
            <i class='fa fa-4x fa-line-chart text-primary sr-icons'></i>
            <h3>Analytics</h3>
            <p class='text-muted' style="font-weight:700">Reports and Analysis to grow opportunity size</p>
          </div>
        </div>
        <div class='col-lg-3 col-md-6 text-center'>
          <div class='service-box'>
            <i class='fa fa-4x fa-gears text-primary sr-icons'></i>
            <h3>Integration</h3>
            <p class='text-muted' style="font-weight:700; font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;">Save time by sending results directly to CRM</p>
          </div>
        </div>
     </div>
    </div>
   </section>
   <section class='no-padding' id='portfolio'>
       <div class='container-fluid'>
         <div class='row no-gutter popup-gallery'>
           <div class='col-lg-4 col-sm-6'>
             <a class="portfolio-box" href="/images/fullsize/software-sized.jpg">
               <img alt="Software" class="img-responsive" src="/images/thumbnails/software-sized.jpg" />
               <div class='portfolio-box-caption'>
                 <div class='portfolio-box-caption-content'>
                   <div class='project-category text-faded'>
                     Draw & Quote
                   </div>
                   <div class='project-name'>
                     IT Sales
                   </div>
                </div>
              </div>
           </a>
        </div>
        <div class='col-lg-4 col-sm-6'>
          <a class="portfolio-box" href="/images/fullsize/dirty-industry-stack-factory-sized.jpg">
              <img alt="Dirty industry stack factory" class="img-responsive" src="/images/thumbnails/dirty-industry-stack-factory-sized.jpg" />
                <div class='portfolio-box-caption'>
                  <div class='portfolio-box-caption-content'>
                    <div class='project-category text-faded'>
                      Draw & Quote
                    </div>
                    <div class='project-name'>
                      Industrial Sales
                    </div>
                  </div>
               </div>
         </a>
      </div>
      <div class='col-lg-4 col-sm-6'>
        <a class="portfolio-box" href="/images/fullsize/it_switch_sized.jpg">
            <img alt="It switch" class="img-responsive" src="/images/thumbnails/it_switch_sized.jpg" />
            <div class='portfolio-box-caption'>
              <div class='portfolio-box-caption-content'>
                <div class='project-category text-faded'>
                  Draw & Quote
                </div>
                <div class='project-name'>
                  Network Equipment Sales
                </div>
             </div>
           </div>
        </a>
     </div>
    <div class='col-lg-4 col-sm-6'>
       <a class="portfolio-box" href="/images/fullsize/diagram_sample.PNG">
          <img alt="Diagram sample" class="img-responsive" src="/images/thumbnails/diagram_sample_sized.png" />
          <div class='portfolio-box-caption'>
             <div class='portfolio-box-caption-content'>
               <div class='project-category text-faded'>
                  IT/Industrial Application
               </div>
             <div class='project-name'>
               Draw the Solution
             </div>
          </div>
        </div>
      </a>
  </div>
  <div class='col-lg-4 col-sm-6'>
    <a class="portfolio-box" href="/images/fullsize/prod_config_size.png">
       <img alt="Prod config" class="img-responsive" src="/images/thumbnails/prod_config_size.png" />
          <div class='portfolio-box-caption'>
             <div class='portfolio-box-caption-content'>
                <div class='project-category text-faded'>
                   Configure Products In Drawing
                </div>
             <div class='project-name'>
               Configuration
             </div>
          </div>
       </div>
    </a>
  </div>
  <div class='col-lg-4 col-sm-6'>
  <a class="portfolio-box" href="/images/fullsize/BOM.PNG">
      <img alt="Bom" class="img-responsive" src="/images/thumbnails/BOM_sized.png" />
      <div class='portfolio-box-caption'>
         <div class='portfolio-box-caption-content'>
            <div class='project-category text-faded'>
              Rapidly Generate Bill of Materials
            </div>
            <div class='project-name'>
             Quotation
            </div>
        </div>
     </div>
   </a>
   </div>
</div>
</div>
</section>
<section id='blog'>
   <aside class='bg-dark'>
      <div class='container text-center'>
         <div class='call-to-action'>
             <h2>Visit Our Blog on Sales and Marketing</h2>
             <a class='btn btn-default btn-xl sr-button' href='http://blog.optecture.com' ngsReveal>Blog</a>
         </div>
      </div>
   </aside>
</section>
<section id='contact'>
   <div class='container'>
      <div class='row'>
        <div class='col-lg-8 col-lg-offset-2 text-center'>
           <h2 class='section-heading'>Let's Get In Touch!</h2>
           <hr class='primary'>
           <p style="font-weight:700">Ready to explore drawing to quote solutions with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
        </div>
        <div class='col-lg-4 col-lg-offset-4 text-center'>
          <i class='fa fa-envelope-o fa-3x sr-contact' ngsReveal></i>
          <p>
             <a href='mailto:sales@optecture.com' style="font-weight:700">sales@optecture.com</a>
          </p>
        </div>
      </div>
   </div>
</section>
<section class='bg-primary' id='login'>
   <div class='container'>
     <div class='row row-centered'>
        <div class='col-sm-offset-4 col-sm-4'>
           <form accept-charset="UTF-8" action="/users/sign_in" class="new_user" id="new_user" method="post">
              <div style="display:none">
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input name="authenticity_token" type="hidden" value="4r72L/rdJOTBn2S/WELBbD0+xnMkKIQ0ShMA0ihmtUM=" />
              </div>
              <fieldset class='form-group'>
                <label for="user_Email">Email</label>
                <input class="form-control" id="user_email" name="user[email]" type="email" value="" />
              </fieldset>
              <fieldset class='form-group'>
                <label for="user_Password">Password</label>
                <input autocomplete="off" class="form-control" id="user_password" name="user[password]" type="password" />
              </fieldset>
              <fieldset class='form-group'>
                <input name="user[remember_me]" type="hidden" value="0" /><input id="user_remember_me" name="user[remember_me]" type="checkbox" value="1" />
                <label for="user_Remember Me">Remember me</label>
              </fieldset>
              <div class='form-group'>
                 <input class="btn btn-default" name="commit" type="submit" value="Login" />
                 <a href="/users/password/new" style="font-weight:700" id="forgot_password">Forgot your password?</a>
              </div>
          </form>

     <hr class='light'>
     <a class="btn btn-block btn-social btn-linkedin" href="/users/auth/linkedin" id="sign_in" style="border-radius:0px"><span class='fa fa-linkedin'></span>
       Sign in with LinkedIn
     </a>
     <a class="btn btn-block btn-social btn-google" href="/users/auth/google_oauth2" id="sign_in" style="border-radius:0px"><span class='fa fa-google-plus' id='googlebutton'></span>
       Sign in with Google
    </a>
  </div>
</div>
</div>
</section>

  `
})

export class HomeComponent implements OnInit {

  public innerHeight : Number;
  constructor(private winRef: WindowRef){
         console.log('Window object', winRef.nativeWindow);
         this.innerHeight = winRef.nativeWindow.innerHeight;
         console.log("Height:", this.innerHeight)
  }

  onResize(event: any) {
        this.innerHeight = event.target.innerHeight;
  }

  ngOnInit(){
    $(document).ready(function() {
       $('#wrapper').css('top', $('#cssmenu').outerHeight());
    })
    var mainbottom = 100;
    $(window).on('scroll',function(){

       // we round here to reduce a little workload
       var stop = Math.round($(window).scrollTop());

       if (stop > mainbottom) {
          $('.navbar-inverse').addClass('nav-lower');
       } else {
          $('.navbar-inverse').removeClass('nav-lower');
       }

    });
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event: any) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

  }
}
