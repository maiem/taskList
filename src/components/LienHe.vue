<template>
  <section class="contact-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="contact-title">Liên hệ</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5981959514097!2d106.66559001433664!3d10.765417862341655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee6f693043b%3A0x469f34fac2a63df2!2zNDQwIMSQLiBOZ3V54buFbiBUcmkgUGjGsMahbmcsIFBoxrDhu51uZyA0LCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1629485896203!5m2!1svi!2s"
              width="100%"
              height="550"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            >
            </iframe>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="contact-form">
            <h3 class="contact-title mb-2">Gửi tin cho chúng tôi</h3>

            <form action="post">
              <div class="col-12">
                <div class="form-group mb-4">
                  <label class="form-label">Họ tên *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Họ tên..."
                  />
                </div>

                <div class="form-group mb-4">
                  <label class="form-label">Email *</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email..."
                  />
                </div>

                <div class="form-group mb-4">
                  <label class="form-label">Tin nhắn *</label>
                  <textarea
                    rows="3"
                    class="form-control"
                    placeholder="Nhập tin nhắn tại đây..."
                  />
                </div>

                <div class="event-btn">
                  <button class="send-mess submit-btn">
                    Gửi ngay
                  </button>
                </div>
                <!-- <span v-if="">Họ tên không để trống</span> -->
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="contact-info">
            <h3 class="contact-title mb-3">Địa chỉ liên hệ</h3>

            <ul class="contact-feature">
              <li class="contact-li mt-3">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus natus corporis a facilis repellendus veniam cum
                  recusandae molestias, sapiente necessitatibus laudantium
                  adipisci beatae incidunt, nesciunt aut atque corrupti est
                  minima?
                </p>
              </li>

              <li class="contact-li mt-3">
                <div class="contact-icon">
                  <font-awesome-icon icon="map-marker-alt" />
                  <span>địa chỉ</span><br />
                  <a href="">440 nguyễn tri phương, q10, TP HCM</a>
                </div>
              </li>

              <li class="contact-li mt-3">
                <div class="contact-icon">
                  <font-awesome-icon icon="phone-alt" />
                  <span>số điện thoại</span><br />
                  <a href="">0359843255</a>
                </div>
              </li>

              <li class="contact-li mt-3">
                <div class="contact-icon">
                  <font-awesome-icon icon="envelope" />
                  <span>email</span><br />
                  <a href="">hathimaianh03@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_reset.scss";

.contact-page {
  padding-top: 50px;

  h2.contact-title {
    text-align: center;
    font-weight: 600;
    padding-bottom: 25px;
  }

  .map {
    overflow: hidden;

    iframe {
      background-color: rgba(202, 200, 195, 0.972);
    }
  }

  .contact-form {
    padding-top: 30px;
    .contact-title {
      text-align: start;
      text-transform: capitalize;
      font-size: 17px;
      font-weight: 700;
    }

    form {
      label {
        color: #000;
        font-weight: 500;
      }

      input,
      textarea {
        box-shadow: none;
        padding: 8px;

        &:focus {
          border-color: #999;
        }
      }

      .event-btn {
        .send-mess {
          color: #fff;
          background: #cd7752;
          padding: 10px 18px;
          border-radius: 4px;
          text-transform: capitalize;
        }
      }
    }
  }

  .contact-info {
    padding-left: 35px;
    padding-top: 30px;

    .contact-title {
      text-align: start;
      text-transform: capitalize;
      font-size: 17px;
      font-weight: 700;
    }

    .contact-li {
      p {
        font-size: 15px;
        font-weight: 500;
      }
      .contact-icon {
        svg {
          margin-right: 15px;
          font-size: 20px;
          color: #000;
        }

        span {
          text-decoration: none;
          color: #000;
          text-transform: capitalize;
          font-size: 15px;
          font-weight: 600;
        }

        a {
          padding-left: 35px;
          text-decoration: none;
          color: #000;
          text-transform: capitalize;
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
