
  import { useState } from "react"

function Navbar (){

 const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (query.trim() !== "") {
      window.location.href = `https://www.olx.com.pk/items/q-${query}`
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
    return(
        <>
          <header className="navbar">
        <nav id="nav1">
          <a href="https://www.olx.com.pk/" className="logo_bar">
            <img src="data:image/png;base64,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" alt="Olx" width="80" className="cursor" />
          </a>

          <a className="motor_div" href="https://www.olx.com.pk/motors/">
            <span className="motor icon">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAACnUlEQVR4AeyWyWsUQRTGK66oePKgeBXxIKgoiPsCiiseFS+KoCCI4tWLy5+goCIoiAoiLicvCu6g6MEFVDxICLkkJIGQELJAtt+XmmpS3dXTU5km5DDh+9Wr6n7v5XV3LTPLzJC/RiHpD9F4I/W8kfkEr4ZdEazCdy4UqpZPs5gst6EPfsO7CP7h2w3XoGpBRYXMJsFzOAvP4BTsjuAcvt/hMtyBXBUVcpTIvSB7HHsf3kdwC98doCL0EJvoB1VUiIK/EvkU6tFFgttB+TBZVStEk1Of4WU2LPrKIBGP4QgEVa2Q7UTMAU1OTN3SJ11GlpWQUbVCtEyHiNCnwdStt2QYg52QUVEhH4gYhjKk5f+TRHpAjK+8Qhbiphm+CHu1RJrIpXmH8RUqZB4uT0B7yFbslRJZR67lcB08hQo5j8dh2Ad6grI5Sd4LoP0JYxUqZAO3/sJrkDbSqLg12KnIxa+tBD/A9sIWSBQqRGeCm6DH8NSquYH9BdsgRtqRXbwmqrYExffTaJ/CWIUKsXdse9CapD2U9GrrpOPT4yRLUSHNiafttFhTc5uOb82LDBUygrMmKMY8pLkHr0AH1wtsjB7hfBdcvE5yhkb5R9VxhAr5z039oBF6otOM94N+CnRiY6T4MwS4+A76midLsVoQGKtQITe5pZPyD/YT6Iwoi8/k+whfwL0dusaECmnjjma7NjStEp0NYgHXp6IlBClebKYvHaDROYaxChWiOzqcZCdzgoHOiVguEZeWHtK7lleI5zQdg7xCtHLS/99tcunrRWNvdVScM/nzCtGM1oyvxJkfdGL3EEIm9I1W8w4zoTe0PeApr5ABvFZAU4X12MxTcK0WdeGkE9fl2sPYGOO3eYX4XtMwahSSfskz5o2MAwAA///+XJI9AAAABklEQVQDAOa0mUUhFKcKAAAAAElFTkSuQmCC" alt="" />
            </span>
            <span className="icon_text-nav1">Motors</span>
          </a>

          <a className="property_div" href="https://www.olx.com.pk/properties/">
            <span className="property icon">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAB7klEQVR4AeyXOy9mURSGv5liiqkmmck0Eo34A0pRUIgoRKEUt0ZcSkIjQkMiREeiELdfoBIR0amVCqFRkKjULs+Ss3aOy/G9Z2lIyPvstfey9trvOWzx/ax8kq9vIy9/EF/yjXTwFOtwCEcCB9SsQQtUlfpGZum0C93wCxT9pmgAzPgw8V0pRv7SYRqOoRaaoFmgkZp6OIVF+AGFUozUZbuniFdQRhcUz4O9nRpioRQjf7LdN1m00Mrg+JP+z+XseyyfdPk0Vir/svhmUIy8tXGL5H4GIclzSykjTqJGxPZ6WdSIXc0djjEISbY2TlJGnESN9NDfeWBuumbwnEWWuqJG9BPEyqiRMfo7+VszRN5hqitqZJwj7I+UwTRplZkxQiylqJFShyjFUSPLNJ/MICR5zm5OSiqTqJEFmjv5W+M5i5ToihrRTxAro0Y26O/kb43nLFKiK2qkjSP6MghJnmtIGXESNSK218uiRuw/r3aOMQhJtjYmUkacRI3s0d/J3xrPWaREV9SIfoJY+aWM3IsPVVTmD/tuHy8qamL5cxugE8rK+nexyX6PvA/L17LC19nnmTOWm2CfbaxhGe7YNwhzcAs5PZ8qRmxHP8MomJmy9LLPPooQiqUasQ4rDDMBttlTVWWMVG32kYJPY+QRAAD//49yoogAAAAGSURBVAMAPYloRfFVP60AAAAASUVORK5CYII=" alt="" />
            </span>
            <span className="icon_text-nav1">Property</span>
          </a>
        </nav>

        <nav id="nav2">
          <span className="select_bar">
            <i className="fa-solid fa-location-dot"></i>
            <select name="country" id="select_bar" className="cursor">
              <option>Pakistan</option>
              <option>China</option>
              <option>UAE</option>
            </select>
          </span>

          <div className="input_bar">
      <input
        type="text"
        placeholder="Find Cars, Mobile Phones and more..."
        id="input_nav2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <span id="input_search" onClick={handleSearch} style={{ cursor: "pointer" }}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB0UlEQVR4AdzUQUhUURTGcSdatIkIKWpRQQQFQrQoatGyRYsICYKiiCIEoyJq3bIQaplEFCSIaxVRUERcuXEjiG7UhQiCqOBehPF3BMV5793xgePG4fvPufPud8/37p03c6LpiF/HOKBarTbjO0awgg2M4QfOlz3ZwiPS4IkGs2jGx0qlcgFnjd/gJKZ5nqkHKhdg4VurOvFA03bMGe/IeAlffLiPDt52ta5qAiy4xP0LrRrNqIUyt2DiEX5ac1lNqiaA6zO6NJhU64onjvA/0ycklQ1o5fyDsvrH+BhJZQMucs6jrGIXVxxTfPGFa7IBm1ynUEqOqcpYQVLZgEXO6ygld36NcVnQllqobMAAVxvKKh7T3nrmbEA8os/d2b16i2KO55Yav5kONamaAFtd5XyHXg1a1EKZu2GiH3+tWVOTqgkIlwXd6nuMatSJq8Y7ijHiVz7hQg/afL6rJpULCKeQPvUmQlOahOJOf7uwghaer+prxJ9hMqQwwKImDdbxAWcQOuftIb4hQsITD8UL/mF3cEfNKRmQcyYuCBsy9RKxk1zIoQM0jp1EyCvjCLmt7qkhAdHNTgbVpziNPTUsIDoKGcN4jHdpaMBu0/31yAO2AQAA///aaAVDAAAABklEQVQDANbHmzHi1l4FAAAAAElFTkSuQmCC"
          alt="Search"
        />
      </span>
    </div>

          <a href="login.html" id="login">
            Login
          </a>

          <div className="sell_container">
            <a href="login.html" className="sell cursor">
              <i className="fa-solid fa-plus sell_icon"></i> SELL
            </a>
          </div>
        </nav>

        <hr />

        <nav id="nav3" className="nav3">
          <select name="All Categories" id="select_nav3">
            <option>ALL CATEGORIES</option>
          </select>

          <a
            href="https://www.olx.com.pk/mobile-phones_c1453"
            className="nav3_name"
          >
            Mobile Phones
          </a>
          <a href="https://www.olx.com.pk/cars_c84" className="nav3_name">
            Cars
          </a>
          <a href="https://www.olx.com.pk/motorcycles_c81" className="nav3_name">
            Motorcycles
          </a>
          <a href="https://www.olx.com.pk/houses_c1721" className="nav3_name">
            Houses
          </a>
        </nav>
      </header>
        </>
    )
}

export default Navbar