<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12">
          <div class="footer-list-wrap">
            <ul class="footer-list">
              <li class="ftlink footer-info">
                <ul class="sub-list">
                  <li class="sublink">
                    <div class="logo mb-2">
                      <a href="">
                        <img src="logodark.png" alt="" />
                      </a>
                    </div>
                  </li>

                  <li class="sublink mt-2">
                    <div class="contact-icon">
                      <font-awesome-icon icon="map-marker-alt" />
                      <a href="">440 nguyễn tri phương, q10, TP HCM</a>
                    </div>
                  </li>

                  <li class="sublink mt-2">
                    <div class="contact-icon">
                      <font-awesome-icon icon="envelope" />
                      <a href="">hathimaianh03@gmail.com</a>
                    </div>
                  </li>

                  <li class="sublink mt-2">
                    <div class="contact-icon">
                      <font-awesome-icon icon="phone-alt" />
                      <a href="">0359843255</a><br />
                    </div>
                  </li>
                </ul>
              </li>

              <li class="ftlink">
                <h2 class="title">dịch vụ</h2>

                <ul class="sublist-li">
                  <li class="sublink mt-2"><a href="">về chúng tôi</a></li>
                  <li class="sublink mt-2"><a href="">faq's</a></li>
                  <li class="sublink mt-2"><a href="">liên hệ</a></li>
                  <li class="sublink mt-2"><a href="">tin tức</a></li>
                </ul>
              </li>

              <li class="ftlink">
                <h2 class="title">liên kết</h2>

                <ul class="sublist-li">
                  <li class="sublink mt-2"><a href="">trang chủ</a></li>
                  <li class="sublink mt-2"><a href="">danh mục</a></li>
                  <li class="sublink mt-2"><a href="">cửa hàng</a></li>
                  <li class="sublink mt-2"><a href="">tin tức</a></li>
                </ul>
              </li>

              <li class="ftlink">
                <h2 class="title">chính sách</h2>

                <ul class="sublist-li">
                  <li class="sublink mt-2"><a href="">đổi trả</a></li>
                  <li class="sublink mt-2"><a href="">giao hàng</a></li>
                  <li class="sublink mt-2"><a href="">thanh toán</a></li>
                  <li class="sublink mt-2"><a href="">tin tức</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* FOOTER */
footer {
  bottom: 0;
  margin-top: 100px;
  padding: 30px 0;
  background: #000;
  color: #fff;
  color: #999;
}

.footer-list-wrap .footer-list {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.footer-info .sub-list .logo a img {
  width: 100%;
  height: 100%;
}

.contact-icon svg {
  margin-right: 15px;
  font-size: 18px;
  color: #cd7752;
}

.contact-icon a {
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  color: #999;
}

.contact-icon a:hover {
  color: #cd7752;
}

.title {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
}

.sublist-li {
  padding-left: 0;
}

.sublist-li a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: #999;
  text-transform: capitalize;
}

.sublist-li a:hover {
  color: #cd7752;
}

ul {
  list-style: none;
}

a,
button {
  display: inline-block;
  text-decoration: none;
  border: none;
  outline: none;
  background: none;
}

a:focus,
button:focus {
  border: none;
  outline: none;
}
</style>
