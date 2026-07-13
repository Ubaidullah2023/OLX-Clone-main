function footer (){
    return(
        <>
          {/* Advertisement */}
<div className="ad">
  <div className="ad_img">
    <img
      src="https://s0.2mdn.net/simgad/16777172638393441902"
      alt="Ads"
    />
  </div>

  <div className="get_app">
    <p className="heading">GET YOUR APP TODAY</p>

    <div className="ad_detail">
      <div className="app_store app">
        <a href="https://apps.apple.com/pk/app/olx-pakistan-online-shopping/id1551315538">
          <img
            src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
            alt=""
            width="120px"
            className="apple"
          />
        </a>
      </div>

      <div className="google_play app" id="apps">
        <a href="https://play.google.com/store/apps/details?id=com.olx.pk&pli=1">
          <img
            src="https://minitaxi.se/wp-content/uploads/2023/06/googleplay-1-e1686150270869.png"
            alt=""
            width="120px"
            className="apps"
          />
        </a>
      </div>

      <div className="app_gallery app" id="apps">
        <a href="https://appgallery.huawei.com/#/app/C104375435">
          <img
            src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
            alt=""
            width="132px"
            className="apps"
          />
        </a>
      </div>
    </div>
  </div>
</div>

{/* footer Section */}
<footer>
  <div className="footer_container">
    <div className="pop_categories">
      <p className="heading">popular categories</p>
      <div className="foot_product_names cursor">
        <p>Cars</p>
        <p>Flats for rent</p>
        <p>Mobile Phones</p>
        <p>Jobs</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">trending searches</p>
      <div className="foot_product_names cursor">
        <p>Bikes</p>
        <p>Watches</p>
        <p>Books</p>
        <p>Dogs</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">About Us</p>
      <div className="foot_product_names cursor">
        <p>About Dubizle Group</p>
        <p>OLX Blog</p>
        <p>Contact Us</p>
        <p>OLX for Businesses</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">OLX</p>
      <div className="foot_product_names cursor">
        <p>Help</p>
        <p>Sitemap</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>

    <div className="pop_categories">
      <p className="heading">Follow US</p>

      <div className="media_details cursor">
        <span className="social1 media">
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span className="social2 media">
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span className="social3 media">
          <i className="fa-solid fa-play"></i>
        </span>
        <span className="social4 media">
          <i className="fa-brands fa-instagram"></i>
        </span>
      </div>

      <div className="ad_detail foot_apps">
        <div className="app_store app cursor">
          <a href="https://apps.apple.com/pk/app/olx-pakistan-online-shopping/id1551315538">
            <img
              src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
              alt=""
              width="120px"
              className="apple foot_apple"
            />
          </a>
        </div>

        <div className="google_play app cursor">
          <a href="https://play.google.com/store/apps/details?id=com.olx.pk&pli=1">
            <img
              src="https://minitaxi.se/wp-content/uploads/2023/06/googleplay-1-e1686150270869.png"
              alt=""
              width="120px"
              className="apps foot_app"
            />
          </a>
        </div>

        <div className="app_gallery app cursor">
          <a href="https://appgallery.huawei.com/#/app/C104375435">
            <img
              src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
              alt=""
              width="132px"
              className="apps foot_app"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="end_footer">
    <p>
      <b>Free Classifieds in Pakistan</b> &copy; 2006-2025 OLX
    </p>
  </div>
</footer>

        </>
    )
}

export default footer