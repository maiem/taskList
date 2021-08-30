<template>
  <section class="customer-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 offset-lg">
          <div class="log-acc-page">
            <div class="acc-page">
              <h2 class="title mb-5">Đăng ký tài khoản</h2>

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
                    <label class="form-label">Mật khẩu *</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu..."
                    />
                  </div>

                  <div class="event-btn">
                    <button class="register-btn submit-btn">
                      tạo tài khoản
                    </button>
                  </div>
                  <!-- <span v-if="">Họ tên không để trống</span> -->
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-3 align-self-center">
          <div class="return-register">
            <span>Bạn đã có tài khoản ?</span>
            <br />
            <router-link to="/dangnhap" class="login-acc mt-4 mb-2">
              đăng nhập ngay
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DangKi",
};
</script>

<style lang="scss">
.customer-page {
  padding-top: 100px;

  .log-acc-page {
    .acc-page {
      h2 {
        text-transform: capitalize;
        font-size: 25px;
        text-align: center;
        font-weight: 600;
      }

      p {
        text-align: center;
        font-size: 15px;
        font-weight: 500;
      }

      form {
        label {
          color: #000;
          font-weight: 500;
          font-size: 15px;
        }

        input {
          box-shadow: none;
          padding: 8px;
          &:focus {
            border-color: #999;
          }
        }

        ::placeholder {
          font-size: 14px;
        }

        .event-btn {
          text-align: center;

          .register-btn {
            width: 100%;
            color: #fff;
            background: #cd7752;
            padding: 10px 18px;
            border-radius: 4px;
            text-transform: capitalize;
            transition: all 0.2s ease-out;
            font-weight: 600;
            border: 2px solid #cd7752;

            &:hover {
              color: #cd7752;
              border: 2px solid #cd7752;
              background: none;
              transition: all 0.2s ease-out;
            }
          }
        }
      }
    }
  }

  .return-register {
    text-align: center;

    span {
      font-size: 16px;
      color: #000;
      font-weight: 500;
    }

    .login-acc {
      width: 100%;
      font-weight: 500;
      color: #cd7752;
      border-radius: 4px;
      text-transform: capitalize;
      position: relative;
      transition: all 0.3s ease-in;
      border: 2px solid #cd7752;
      padding: 10px 14px;
    }
  }
}
</style>
