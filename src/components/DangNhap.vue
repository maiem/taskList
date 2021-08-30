<template>
  <section class="customer-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 offset-lg">
          <div class="log-acc-page">
            <div class="acc-page">
              <h2 class="title mb-4">đăng nhập</h2>

              <p>Điền thông tin chi tiết phía dưới</p>

              <form action="post">
                <div class="col-12">
                  <div class="form-group">
                    <label class="form-label">Email *</label>
                    <input
                      type="email"
                      class="form-control mb-4"
                      placeholder="Email..."
                    />
                  </div>

                  <div class="form-group">
                    <label class="form-label">Mật khẩu *</label>
                    <input
                      type="password"
                      class="form-control mb-5"
                      placeholder="Mật khẩu..."
                    />
                  </div>

                  <div class="event-btn">
                    <button class="login-btn submit-btn">đăng nhập</button>
                    <br />
                    <router-link to="" class="forgot-pass">
                      quên mật khẩu ?
                    </router-link>
                  </div>
                  <!-- <span v-if="">Họ tên không để trống</span> -->
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-3 align-self-center">
          <div class="return-register">
            <span>Bạn chưa có tài khoản ?</span>
            <br />
            <router-link to="/taotaikhoan" class="create-acc mt-4 mb-2">
              tạo tài khoản
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "DangNhap",

  data() {
    return {
      loginData: [],
      formError: [],
    };
  },

  mounted() {
    const url = "https://localhost:44302/api";

    //  get sản phẩm
    axios
      .get(url + "/dangnhap")
      .then((response) => {
        this.loginData = response.data;
        console.log(this.loginData);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang="scss">
.customer-page {
  padding-top: 100px;

  .log-acc-page {
    border: 1px solid rgba(187, 184, 184, 0.678);
    padding: 30px;
    border-radius: 4px;

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

          .login-btn {
            color: #fff;
            background: #cd7752;
            width: 100%;
            padding: 8px 18px;
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

          .forgot-pass {
            font-size: 13px;
            font-weight: 500;
            padding: 10px 10px 0;
            font-weight: 500;
            color: #cd7752;

            &::first-letter {
              text-transform: capitalize;
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
    .create-acc {
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

    p {
      text-align: center;
      font-size: 13px;
      text-align: start;
      font-weight: 500;
      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
}
</style>
